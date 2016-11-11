

let vscode = require('vscode');
//let header =  require("./myModule");

function activate(context) {


    let insert = require('./insertAnnotate');

 
    let disposable1 = vscode.commands.registerCommand('extension.NoteFile', function () {
        
        let point = new vscode.Position(0,0);
        insert.note(point,1);
    });

    let disposable2 = vscode.commands.registerCommand('extension.NoteFuntion', function () { 

        let editor = vscode.window.activeTextEditor;
        let doc = editor.document;
        let i =  doc.lineAt(editor.selection.anchor.line).firstNonWhitespaceCharacterIndex;
        let j = 0;
        let k = "";
        for(;j<i;j=j+1)
        {
            k= k+" ";
        } 
        let sectionFun = new vscode.Range(editor.selection.anchor,editor.selection.active);  
        let functionName = doc.getText(sectionFun);
        let point = new vscode.Position (insert.getCursor().line ,0);
        editor.edit((eb) => {
            eb.insert(point,k+"/**\t\n"+k+"*@brief "+functionName+"\r\n"+k+"*\r\n"+k+"*@param \r\n"+k+"*\r\n"+k+"*@return \r\n"+k+"*\r\n"+k+"*/\r\n");
        });

    });

    let disposable3 = vscode.commands.registerCommand('extension.NoteCow', function () {
        
        let point  = new vscode.Position (insert.getCursor().line ,insert.getCursor().character);
        insert.note(point,3);
    });

    vscode.Disposable(insert);
    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
}


exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;