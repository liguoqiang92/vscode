let vscode = require('vscode');

function activate(context) {
    let insert = require('./insertAnnotate');
    let disposable1 = vscode.commands.registerCommand('extension.NoteFile', function () {       
       insert.noteHead(); 
    });

    let disposable2 = vscode.commands.registerCommand('extension.NoteFuntion', function () { 
        insert.noteFunction();
    });

    let disposable3 = vscode.commands.registerCommand('extension.NoteCow', function () {        
       insert.noteLine();
    });

    vscode.Disposable(insert);
    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
}

exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;