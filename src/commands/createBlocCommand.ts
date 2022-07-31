
import { window, Uri } from 'vscode';
import { createBlocFiles, getBlocClassname, getBlocFilename } from '../utils';

export async function createBlocCommand(
    folder: Uri | undefined    
) {

    const blocName = await getBlocNameFromInput();
    if (blocName === undefined) {
        return -1;
    }

    const blocFilename = getBlocFilename(blocName);
    const blocClassname = getBlocClassname(blocName);
    if (blocFilename.length === 0 || blocClassname.length === 0) {
        window.showErrorMessage(`Bloc wasn't created: invalid bloc name`);
        return -2;
    }

    folder = folder || await getBlocFolder();
    if (folder === undefined) {
        window.showWarningMessage(`Bloc wasn't created: invalid folder`);
        return -3;
    }
    
    createBlocFiles(folder.path, blocFilename, blocClassname);

    window.showInformationMessage(`Bloc ${blocClassname} successfully created`);
    return 0;
}

async function getBlocNameFromInput(): Promise<string | undefined> {
    return window.showInputBox({
        prompt: 'Bloc name',
        placeHolder: 'Only alpha-numeric characters, spaces and underscore are supported',
    });
}

async function getBlocFolder(): Promise<Uri | undefined> {
    const folders = await window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: 'Select folder'      
    });
    return folders !== undefined && folders.length > 0 ? folders[0] : undefined;
}


