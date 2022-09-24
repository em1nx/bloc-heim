
export function blocProviderSnippet(child: string): string {
    return `
BlocProvider(
\tcreate: (context) => \${1:BlocClassname}.fromContext(context),
\tchild: ${child},
)        
`.trim();
}