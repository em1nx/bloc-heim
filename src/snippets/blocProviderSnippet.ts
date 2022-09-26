
export function blocProviderSnippet(child: string): string {
    return `
BlocProvider(
\tcreate: (context) => \${1:Bloc}.fromContext(context),
\tchild: ${child},
)        
`.trim();
}