
import { blocConsumerSnippet } from "../snippets/blocConsumerSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocConsumerCommand() {
    await wrapWith(blocConsumerSnippet);
    await importBlocLibrary();    
} 