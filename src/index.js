// // src/graphql/index.js
import { promises as fs } from 'fs';
import { dirname, join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function currentFile(url) {
  return fileURLToPath(url)
}

function currentDirname(filename) {
  return dirname(filename)
}

async function loadFiles(basePath, extension) {
  let recursive = false;
  let directory = basePath;

  // Vérifier si le chemin contient '/**/'
  if (basePath.includes('/**/')) {
    recursive = true;
    directory = basePath.replace('/**/', '/');
  }

  async function load(directory) { 
    let modules = [];
    const items = await fs.readdir(directory, { withFileTypes: true });

    for (const item of items) {
      const itemPath = join(directory, item.name); 
      if (item.isDirectory() && recursive) { 
        modules = modules.concat(await load(itemPath));
      } else if (item.isFile() && itemPath.endsWith(extension)) {
        const module = await import(resolve(itemPath));
        modules.push(module.default);
      }
    }
    return modules;
  }
  const modules = load(resolve(__dirname, directory))
  return modules //.map(m => m.default);
}

async function loadGraphQLComponents() {
  const types = await loadFiles(join(__dirname, './types/**/'), 'graphql.js');
  const resolvers = await loadFiles(join(__dirname, './resolvers'), 'js');

  // Fusionner les types et les résolveurs si nécessaire
  // ... 
  return { types, resolvers };
}

export { loadGraphQLComponents, currentDirname, currentFile, loadFiles };
