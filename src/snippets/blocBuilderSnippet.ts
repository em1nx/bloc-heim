import { fixEmptyChild } from "../utils";

export function blocBuilderSnippet(child: string): string {
    return `
BlocBuilder<\${1:Bloc},\${2:State}>(
\tbuilder: (context, state) {
\t\treturn ${fixEmptyChild(child)};
\t},
)        
`.trim();
}

