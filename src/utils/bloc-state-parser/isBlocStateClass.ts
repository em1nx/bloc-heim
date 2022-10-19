import { ClassReflection, getClassReflection } from "./getClassReflection";


const blocStateClassPattern = (className: string) => new RegExp(`^class\\s+${className}\\s+extends\\s+Equatable`);
const stateStatusFieldPattern = (blocName: string) => new RegExp(`\\s+final ${blocName}Status status;`);
const stateStatusConstructorPattern = () => /required\s+this\.status,/;
const stateStatusPropsPattern = () => /List<Object\??> get props => \[.*[^\w]?status[^\w]?.*\];/s;

export function isBlocStateClass(classRefelection: ClassReflection): boolean {
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

