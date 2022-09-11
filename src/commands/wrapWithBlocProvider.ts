
import { blocProviderTemplate } from "../templates/blocProviderTemplate";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocProvider() {
    await wrapWith(blocProviderTemplate);
    await importBlocLibrary();    
} 