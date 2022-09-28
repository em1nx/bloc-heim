import { fixEmptyChild } from "../utils";

export function blocSelectorSnippet(child: string): string {
    return `
BlocSelector<\${1:Bloc},\${2:State},bool>(
\tselector: (state) {
\t\t// TODO: add your custom selector code
\t\treturn true;
\t},
\tbuilder: (context, state) {
\t\treturn ${fixEmptyChild(child)};
\t},
)        
`.trim();
}