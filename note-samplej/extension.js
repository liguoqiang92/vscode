/**
* @file note samplej
* @brief
* @author liguoqiang
* @date 2016-11-10
*
* $Id$
*/
var vscode = require('vscode');

var funnote = [
  'fun head'
];
var filenote = [
  'file head'
];

var pickOptions = {
  matchOnDescription: true,
  matchOnDetail: true,
  placeHolder: "Type note name"
}

function insertText(text) {
  var editor = vscode.window.activeTextEditor;
  editor.edit(function (editBuilder) {
    editBuilder.delete(editor.selection);
  }).then(function () {
    editor.edit(function (editBuilder) {
      editBuilder.insert(editor.selection.start, text);
    });
  });
}

function activate(context) {

  var insertNote = vscode.commands.registerCommand('extension.insertNote', function () {
    vscode.window.showQuickPick(funnote, pickOptions).then(function (item) {
      insertText('\/*' + '\n* @brief ' + '\n*' + '\n* @param' + '\n*' + '\n* @return ' + '\n*/\n');
    });

  });

    var insertNote2 = vscode.commands.registerCommand('extension.insertNote2', function () {
    vscode.window.showQuickPick(filenote, pickOptions).then(function (item) {
      insertText('\/** \n* @file  \n* @brief  \n* @author  \n* @date  \n* \n* $Id$ \n*/\n');
    });

  });
  context.subscriptions.push(insertNote);
  context.subscriptions.push(insertNote2);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;