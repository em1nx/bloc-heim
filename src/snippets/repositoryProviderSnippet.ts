
export function repositoryProviderSnippet(child: string): string {
    return `
RepositoryProvider(
\tcreate: (context) => \${1:Repository}(),
\tchild: ${child},
)        
`.trim();
}