
export function blocBuilderSnippet(child: string): string {
    return `
BlocBuilder<\${1:Bloc},\${2:State}>(
\tbuilder: (context, state) {
\t\treturn ${child};
\t},
)        
`.trim();
}