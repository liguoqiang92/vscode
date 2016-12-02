# 自动插入注释插件

##使用方法
* windows环境下将annotate文件夹放入 c：\用户目录\当前用户目录\.vscode\extensions ，例如C:\Users\zcx2570469\.vscode\extensions，
* liunx环境下将annotate文件夹放入 VSCode安装目录\app\extensions下。
* 重新启动VSCode后，就能正常使用。

##默认快捷键
ctrl+alt+h : 在文件头插入注释；
ctrl+alt+f ：给函数插入注释，需要把光标移到函数的那一行（用鼠标选定函数名，可以在注释中自动插入函数名）；
ctrl+alt+l ：在光标处插入行注释 （空行插入/** */, 非空行插入/*-< */ )。

##存在的问题
* 每次打开文件，给函数插入注释（ctrl+alt+f）的时候可能会出现无法使用的情况，可以先在任意处插入行注释（ctrl+alt+l），然后再撤销（ctrl+z），就能正常使用了。
* 插入函数注释时，根据光标所在行逗号(,)的个数来判定有多少个输入的参数，可能跟实际情况有误差。
* 在Ubuntu上测试的时侯，出现了快捷键冲突，可以通过修改annotate/package.json文件，更改快捷键：
    修改位置在
    "contributes": {
        "keybindings": [
            {
                "command": "extension.NoteFile",   
                "key": "ctrl+alt+h",                 /*-< 插入文件头的快捷键 */
                "when":"editorTextFocus"
            },
            {
                "command": "extension.NoteFuntion",
                "key": "ctrl+alt+f",                  /*-< 插入函数的快捷键 */
                "when":"editorTextFocus"
            },
            {
                "command": "extension.NoteCow",
                "key": "ctrl+alt+l",        /*-< 插入行的快捷键 */
                "when":"editorTextFocus"    
            }
        ]
    }