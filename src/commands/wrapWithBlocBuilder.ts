
import { blocBuilderSnippet } from "../snippets/blocBuilderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocBuilder() {
    await wrapWith(blocBuilderSnippet);
    await importBlocLibrary();    
} 