
import { blocListenerSnippet } from "../snippets/blocListenerSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocListenerCommand() {
    await wrapWith(blocListenerSnippet);
    await importBlocLibrary();    
} 