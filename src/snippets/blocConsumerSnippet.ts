import { fixEmptyChild } from "../utils";

export function blocConsumerSnippet(child: string): string {
    return `
BlocConsumer<\${1:Bloc},\${2:State}>(
\tlistener: (context, state) {
\t\t// TODO: do stuff here based on \${1:Bloc} state
\t},
\tbuilder: (context, state) {
\t\treturn ${fixEmptyChild(child)};
\t},
)        
`.trim();
}