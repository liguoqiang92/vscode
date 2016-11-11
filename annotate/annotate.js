// 'use strict'


function getNowTime()
{
    var data = new Date;
    var nowTime = " ";
    var hours = data.getHours();
    var minutes = data.getMinutes();
    if (data.getHours() < 10)
    {
        hours="0"+data.getHours();
    }
    if (data.getMinutes() < 10)
    {
        minutes="0"+data.getMinutes();
    }
    nowTime = data.getFullYear()+"-"+data.getMonth()+"-"+data.getDate()+" "+hours+":"+minutes;
    return nowTime;
}
  
function getFunctionName ()
{
    var editor = vscode.window.activeTextEditor;
    var doc = editor.document;
    var sectionFun = new vscode.Range(editor.selection.anchor,editor.selection.active);  
    var functionName = doc.getText(sectionFun);
    return functionName;
}

var a = "/**\r\n**@Title:\r\n**@Author:\r\n**@Time: "+nowTime+"\r\n**\r\n***************/";
var c = getNowTime();


module.exports.a = a;
module.exports.c = c;
