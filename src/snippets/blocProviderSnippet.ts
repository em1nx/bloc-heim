import { fixEmptyChild } from "../utils";

export function blocProviderSnippet(child: string): string {
    return `
BlocProvider(
\tcreate: (context) => \${1:Bloc}.fromContext(context),
\tchild: ${fixEmptyChild(child)},
)        
`.trim();
}