
import { multiBlocListenerSnippet } from "../snippets/multiBlocListenerSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithMultiBlocListenerCommand() {
    await wrapWith(multiBlocListenerSnippet);
    await importBlocLibrary();
} 