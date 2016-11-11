
let vscode = require('vscode');
let annotate = require('./myModule.js')



/** 找到光标所在的位置 */
function getCursor()
{
    var editor = vscode.window.activeTextEditor;
    var doc = editor.document;
    return editor.selection.anchor;   
}

/** 插入不同注释*/
function note (point,options){   
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    let header = require('./myModule.js')
    let text = "";
    switch (options)
    {
    case 1: text  = header.a;break;
    case 2: text  = header.b;vscode.window.showErrorMessage("0101"+test); break;
    case 3: text  = header.c;break;
    default : text = null;
    }
    editor.edit((eb) => {
    eb.insert(point,text);
    })
    return ;   
}

module.exports.note = note;
module.exports.getCursor = getCursor;
// module.exports.point = point;