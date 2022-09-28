
export function fixEmptyChild(child: String) {
    if (child.trim().length === 0) {
        return 'Container()';
    }
    else {
        return child;
    }
}