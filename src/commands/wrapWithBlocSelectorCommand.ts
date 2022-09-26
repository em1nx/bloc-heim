
import { blocSelectorSnippet } from "../snippets/blocSelectorSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocSelectorCommand() {
    await wrapWith(blocSelectorSnippet);
    await importBlocLibrary();
} 