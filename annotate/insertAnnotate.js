/**
*@file  \annotate\myModule.js
*@brief  本模块是插入注释时的逻辑操作
*@author 朱传贤
*@data  2016-11-14 09:30
*
* $Id$
*/

'use strict' 

let vscode = require('vscode');   
let annotate = require('./myModule.js')

let editor = vscode.window.activeTextEditor;
let doc = editor.document;

/**
*@brief 获得光标的位置
*/
function getCursor()
{
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    return editor.selection.anchor;   
}

/**
*@brief note 插入注释的逻辑操作
*
*@param  point 插入注释的位置
*@param  text 要插入的注释
*/
function note (point,text){   

    editor.edit((eb) => {
    eb.insert(point,text);
    })
    return ;   
}

/**
*@brief 插入头文件
*/
function noteHead()
{
    let point = new vscode.Position(0,0);
    let text = annotate.a;
    note(point,text);
}

/**
 * @brief 插入行注释
 */
function noteLine()
{
    let point = new vscode.Position (getCursor().line ,getCursor().character); 
    let text = annotate.c;
    note(point,text); 
}

/**
 * @brief 插入函数注释
 */
function noteFunction()
{
    let i =  doc.lineAt(editor.selection.anchor.line).firstNonWhitespaceCharacterIndex;  
    let j = 0;
    let k = "";
    for(;j<i;j=j+1)
    {
        k= k+" ";
    } 

    let sectionFun = new vscode.Range(editor.selection.anchor,editor.selection.active);  
    let functionName = doc.getText(sectionFun);  /*-< 获得光标选中的函数名 */ 
    let param = "";
    let line = doc.lineAt(editor.selection.anchor.line);    
    let num = line.text.split(",").length;
    for (j=0;j<num;j=j+1)
    {
        param = param+k+" *@param"+annotate.newLine;
    }
    
    let point = new vscode.Position (getCursor().line ,0);
    let text = k+"/**"+annotate.newLine+k+" *@brief "+functionName+annotate.newLine+k+" *"+annotate.newLine+param+k+" *"+annotate.newLine+k+" *@return "+annotate.newLine+k+" */"+annotate.newLine;
    note(point,text);
}


module.exports.noteFunction = noteFunction;
module.exports.noteHead = noteHead;
module.exports.noteLine = noteLine;
module.exports.getCursor = getCursor;
