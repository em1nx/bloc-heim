
export function multiRepositoryProviderSnippet(child: string): string {
    return `
MultiRepositoryProvider(
\tproviders: [
\t\tRepositoryProvider(
\t\t\tcreate: (context) => \${1:Repository}(),
\t\t),
\t\t// TODO: you can add additional repositories here
\t],
\tchild: ${child},
)        
`.trim();
}