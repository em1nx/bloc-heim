
import { blocProviderSnippet } from "../snippets/blocProviderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocProviderCommand() {
    await wrapWith(blocProviderSnippet);
    await importBlocLibrary();    
} 