/**
*@file  annotate\myModule.js
*@brief  本模块用于生成要插入的注释
*@author 朱传贤
*@data  2016-11-14 09:30
*
* $Id$
*/
 'use strict'


let vscode = require('vscode');
var newLine = "\r\n";  

/** 得到当前时间nowTime */
function getNowTime()
{
    let data = new Date;
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let day = data.getDate();
    if (data.getHours() < 10)
    {
        hours="0"+data.getHours();
    }
    if (data.getMinutes() < 10)
    {
        minutes="0"+data.getMinutes();
    }
    let nowTime = year+"-"+month+"-"+day+" "+hours+":"+minutes;
    return nowTime;
}

/** 获取当前文件名 */
function getFileName()
{
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    let fileName = doc.fileName;
    return fileName;
}

/** 文件头的注释 */
var a = "/**"+newLine+
        " *@file  "+getFileName()+newLine+
        " *@brief  "+newLine+
        " *@author "+newLine+
        " *@data  "+getNowTime()+newLine+
        " *"+newLine+
        " * $Id$"+newLine+
        " */"+newLine;

 /** 空行注释 */ 
 var b = "/** */";

/** 行注释 */
var c = " /*-<  */ ";


module.exports.a = a;
module.exports.b = b;
module.exports.c = c;
module.exports.newLine = newLine;
