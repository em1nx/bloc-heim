
import { blocBuilderSnippet } from "../snippets/blocBuilderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocBuilderCommand() {
    await wrapWith(blocBuilderSnippet);
    await importBlocLibrary();    
} 