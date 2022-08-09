import { wrapWith } from "../utils";


export async function wrapWithBlocProvider() {
    wrapWith(
        (child: string) => {
          return `
BlocProvider(
\tcreate: (context) => \${1:BlocClassname}.fromContext(context),
\tchild: ${child},
)            
`.trim();
        }
    );
} 