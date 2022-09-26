
export function multiBlocListenerSnippet(child: string): string {
    return `
MultiBlocListener(
\tlisteners: [
\t\tBlocListener<\${1:Bloc},\${2:State}>(
\t\t\tlistener: (context,state) {
\t\t\t\t// TODO: do stuff here based on \${1:Bloc} state
\t\t\t},
\t\t),
\t\t// TODO: you can add additional listeners here
\t],
\tchild: ${child},
)        
`.trim();
}