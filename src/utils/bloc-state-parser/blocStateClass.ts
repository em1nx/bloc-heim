import { Position, Selection } from "vscode";

export class BlocStateClass {
    public constructor(
        public constructorParamPosition: Position,
        public classFieldPosition: Position,
        public copyWithParamPosition: Position,
        public copyWithBodyPosition: Position,
        public propsGetterPosition: Position,
    ) {
    } 
}