
const CLASS_PATTERN = /^\s*class (?<name>\w+)/;
const EOL_CHARACTER = "\n";
const OPEN_BRACKET = '{';
const CLOSING_BRACKET = '}';

export interface ClassReflection {
    name: string,
    source: string,
}

export function getClassReflection(text: string, selectionLine: number): ClassReflection | null {

    let className;
    let classLine;
    const lines = text.split(EOL_CHARACTER);

    // Find class name and line
    for (let l = selectionLine; l--; l >= 0) {
        const match = lines[l].match(CLASS_PATTERN);
        if (match) {
            classLine = l;
            className = match.groups!['name'];
            break;
        }
    }

    // Find class closing bracket and return result
    if (classLine !== undefined && className !== undefined) {
        const tempSource = lines.slice(classLine).join(EOL_CHARACTER);
        let lastClosingBracketPosition = getLastClosingBracketPosition(tempSource);
        if (lastClosingBracketPosition !== null) {
            return {
                name: className,
                source: tempSource.substring(0, lastClosingBracketPosition+1),
            };
        }
    }

    return null;
}

function getLastClosingBracketPosition(text: string): number | null {
    let i = 0;
    let level = 0;
    let openBracketFound = false;

    while (text[i] !== undefined) {
        if (text[i] === OPEN_BRACKET) {
            openBracketFound = true;
            level++;
        }
        if (text[i] === CLOSING_BRACKET) {
            level--;
        }
        if (level === 0 && openBracketFound) {
            return i;
        }
        i++;
    }

    return null;
}