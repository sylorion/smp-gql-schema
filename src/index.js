// // src/graphql/index.js
import { promises as fs } from 'fs';
import { dirname, join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

export { default as Comment } from "./src/types/Comment.graphql.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function loadFiles(basePath, extension) {
  let recursive = false;
  let directory = basePath;

  // Vérifier si le chemin contient '/**/'
  if (basePath.includes('/**/')) {
    recursive = true;
    directory = basePath.replace('/**/', '/');
  }

  async function load(directory) {
    console.log(directory)
    let modules = [];
    const items = await fs.readdir(directory, { withFileTypes: true });

    for (const item of items) {
      const itemPath = join(directory, item.name );
      console.log(itemPath) 
      if (item.isDirectory()  && recursive) { 
        console.log("Faire une recherche pour " + itemPath)
        modules = modules.concat(await load(itemPath));
      } else if (item.isFile() && itemPath.endsWith(extension)) {
        const module = await import(resolve(itemPath));
        modules.push(module.default);
      }
    }
    return modules;
  }
  const modules = load(resolve(__dirname, directory))
  console.log(modules)
  return modules //.map(m => m.default);
}

async function loadGraphQLComponents() {
  const types = await loadFiles(join(__dirname, './types/**/'), 'graphql.js');
  const resolvers = await loadFiles(join(__dirname, './resolvers'), 'js');

  // Fusionner les types et les résolveurs si nécessaire
  // ... 
  return { types, resolvers };
}

export { loadGraphQLComponents };
