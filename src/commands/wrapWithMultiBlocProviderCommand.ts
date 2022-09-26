
import { multiBlocProviderSnippet } from "../snippets/multiBlocProviderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithMultiBlocProviderCommand() {
    await wrapWith(multiBlocProviderSnippet);
    await importBlocLibrary();
} 