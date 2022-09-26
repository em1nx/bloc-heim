
import { repositoryProviderSnippet } from "../snippets/repositoryProviderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithRepositoryProviderCommand() {
    await wrapWith(repositoryProviderSnippet);
    await importBlocLibrary();    
} 