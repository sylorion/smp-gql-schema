// // src/graphql/index.js
import { promises as fs } from 'fs';
import { dirname, join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

// export { default as Comment } from "./src/types/Comment.graphql.js";


export { default as AuditnLogActionType }              from "./src/types/enums/AuditLogActionType.graphql.js"
export { default as DevisStage }              from "./src/types/enums/DevisStage.graphql.js"
export { default as MediaType }             from "./src/types/enums/MediaType.graphql.js" 
export { default as NotificationFrequencyPref }             from "./src/types/enums/NotificationFrequencyPref.graphql.js"
export { default as ObjectStatus }              from "./src/types/enums/ObjectStatus.graphql.js"
export { default as OrganizationEconomicSizeKind }              from "./src/types/enums/OrganizationEconomicSizeKind.graphql.js"
export { default as PaymentMethodType }             from "./src/types/enums/PaymentMethodType.graphql.js"
export { default as PaymentStatus }             from "./src/types/enums/PaymentStatus.graphql.js"
export { default as PlaceKind }             from "./src/types/enums/PlaceKind.graphql.js"
export { default as ProfileGender }             from "./src/types/enums/ProfileGender.graphql.js"
export { default as ServiceBillingPlan }              from "./src/types/enums/ServiceBillingPlan.graphql.js"
export { default as ServicesAcceptedDevice }              from "./src/types/enums/ServicesAcceptedDevice.graphql.js"
export { default as ServiceSupplyForm }             from "./src/types/enums/ServiceSupplyForm.graphql.js"
export { default as ServiceUptakeType }             from "./src/types/enums/ServiceUptakeType.graphql.js"
export { default as TargetedEntityCriteria }              from "./src/types/enums/TargetedEntityCriteria.graphql.js"
export { default as UserType }              from "./src/types/enums/UserType.graphql.js"

export { default as Application }            from "./src/types/Application.graphql.js"
export { default as Asset }             from "./src/types/Asset.graphql.js"
export { default as AuditLog }              from "./src/types/AuditLog.graphql.js"
export { default as Comment }             from "./src/types/Comment.graphql.js"
export { default as Criteria }              from "./src/types/Criteria.graphql.js"
export { default as Devis }             from "./src/types/Devis.graphql.js"
export { default as DevisAsset }              from "./src/types/DevisAsset.graphql.js"
export { default as Discount }              from "./src/types/Discount.graphql.js"
export { default as Documentation }             from "./src/types/Documentation.graphql.js"
export { default as FallibleResponse }              from "./src/types/FallibleResponse.graphql.js"
export { default as FaqAnswer }             from "./src/types/FaqAnswer.graphql.js"
export { default as FaqOrganization }             from "./src/types/FaqOrganization.graphql.js"
export { default as FaqQuestion }             from "./src/types/FaqQuestion.graphql.js"
export { default as FaqService }              from "./src/types/FaqService.graphql.js"
export { default as FilterInput }             from "./src/types/FilterInput.graphql.js"
export { default as Follow }              from "./src/types/Follow.graphql.js"
export { default as HelloWorld }              from "./src/types/HelloWorld.graphql.js"
export { default as Industry }              from "./src/types/Industry.graphql.js"
export { default as Invoice }             from "./src/types/Invoice.graphql.js"
export { default as Media }             from "./src/types/Media.graphql.js"
export { default as MutationError }             from "./src/types/MutationError.graphql.js"
export { default as Organization }              from "./src/types/Organization.graphql.js"
export { default as OrganizationMedia }             from "./src/types/OrganizationMedia.graphql.js"
export { default as PaginationInput }             from "./src/types/PaginationInput.graphql.js"
export { default as PaymentConfig }             from "./src/types/PaymentConfig.graphql.js"
export { default as PaymentMethod }             from "./src/types/PaymentMethod.graphql.js"
export { default as Place }             from "./src/types/Place.graphql.js"
export { default as Profile }             from "./src/types/Profile.graphql.js"
export { default as Review }              from "./src/types/Review.graphql.js"
export { default as Role }              from "./src/types/Role.graphql.js"
export { default as Service }             from "./src/types/Service.graphql.js"
export { default as ServiceAsset }              from "./src/types/ServiceAsset.graphql.js"
export { default as ServiceAttribut }             from "./src/types/ServiceAttribut.graphql.js"
export { default as ServiceMedia }              from "./src/types/ServiceMedia.graphql.js"
export { default as SortInput }             from "./src/types/SortInput.graphql.js"
export { default as Tag }             from "./src/types/Tag.graphql.js"
export { default as TermsAndConditions }              from "./src/types/TermsAndConditions.graphql.js"
export { default as Topic }             from "./src/types/Topic.graphql.js"
export { default as Transaction }             from "./src/types/Transaction.graphql.js"
export { default as User }              from "./src/types/User.graphql.js"
export { default as UserOrganization }              from "./src/types/UserOrganization.graphql.js"
export { default as UserPreferences }             from "./src/types/UserPreferences.graphql.js"
export { default as UserRole }              from "./src/types/UserRole.graphql.js"


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
