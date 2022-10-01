import { getClassReflection } from "./getClassReflection";


const blocStateClassPattern = (className: string) => new RegExp(`^class\\s+${className}\\s+extends\\s+Equatable`);
const stateStatusFieldPattern = (blocName: string) => new RegExp(`\\s+final ${blocName}Status status;`);
const stateStatusConstructorPattern = () => /required\s+this\.status,/;
const stateStatusPropsPattern = () => /List<Object\?> get props => \[.*[^\w]?status[^\w]?.*\];/;

export function isBlocStateClass(text: string, selectionLine: number): boolean {
    const classRefelection = getClassReflection(text, selectionLine);
    if (classRefelection === null) {
        return false;
    }

    const patterns = [
        blocStateClassPattern(classRefelection.name),
        stateStatusFieldPattern(classRefelection.name.replace(/State$/,'')),
        stateStatusConstructorPattern(),
        stateStatusPropsPattern(),   
    ];
    
    for (let pattern of patterns) {
        if (!classRefelection.text.match(pattern)) {
            return false;
        }
    }

    return true;
}

