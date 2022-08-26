
export function blocProviderTemplate(child: string): string {
    return `
BlocProvider(
\tcreate: (context) => \${1:BlocClassname}.fromContext(context),
\tchild: ${child},
)        
`.trim();
}