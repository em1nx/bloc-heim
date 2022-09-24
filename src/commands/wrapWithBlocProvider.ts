
import { blocProviderSnippet } from "../snippets/blocProviderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocProvider() {
    await wrapWith(blocProviderSnippet);
    await importBlocLibrary();    
} 