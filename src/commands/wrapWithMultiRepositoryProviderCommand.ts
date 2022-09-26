
import { multiRepositoryProviderSnippet } from "../snippets/multiRepositoryProviderSnippet";
import { importBlocLibrary, wrapWith } from "../utils";

export async function wrapWithMultiRepositoryProviderCommand() {
    await wrapWith(multiRepositoryProviderSnippet);
    await importBlocLibrary();
} 