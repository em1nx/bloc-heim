import { fixEmptyChild } from "../utils";

export function blocListenerSnippet(child: string): string {
    return `
BlocListener<\${1:Bloc},\${2:State}>(
\tlistener: (context, state) {
\t\t// TODO: do stuff here based on \${1:Bloc} state
\t},
\tchild: ${fixEmptyChild(child)},
)        
`.trim();
}