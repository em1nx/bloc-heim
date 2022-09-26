
export function multiBlocProviderSnippet(child: string): string {
    return `
MultiBlocProvider(
\tproviders: [
\t\tBlocProvider<\${1:Bloc}>(
\t\t\tcreate: (context) => \${1:Bloc}.fromContext(context),
\t\t),
\t\t// TODO: you can add additional providers here
\t],
\tchild: ${child},
)        
`.trim();
}