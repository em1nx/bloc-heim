
import { blocSelectorSnippet } from "../snippets/blocSelectorSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithBlocSelector() {
    await wrapWith(blocSelectorSnippet);
    await importBlocLibrary();
} 