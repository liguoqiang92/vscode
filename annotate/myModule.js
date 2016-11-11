 'use strict'

let vscode = require('vscode');

/** 得到当前时间nowTime */
function getNowTime()
{
    var data = new Date;
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
    var nowTime = data.getFullYear()+"-"+data.getMonth()+"-"+data.getDate()+" "+hours+":"+minutes;
    return nowTime;
}

/** 获取当前文件名 */
function getFileName()
{
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    var fileName = doc.fileName;
    return fileName;
}


var a = "/**\r\n*@file  "+getFileName()+"\r\n"+"*@brief  \r\n"+"*@author \r\n*@data  "+getNowTime()+"\r\n*\r\n* $Id$\r\n*/\n";
var c = "  /*-<  */";

// module.exports.NoteTitle = NoteTitle();
module.exports.a = a;
module.exports.c = c;
