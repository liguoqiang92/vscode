自动插入注释插件

    将annotate文件夹放入 c：\用户目录\当前用户目录\.vscode\extensions ，例如C:\Users\zcx2570469\.vscode\extensions，
再重新启动vscode就能正常使用。

ctrl+alt+h : 在文件头插入注释
ctrl+alt+f ：给函数插入注释（需要用鼠标选定函数名）
ctrl+alt+l ：在光标处插入行注释

*每次打开文件，给函数插入注释的时候会出现无法使用的情况：在任意处先使用ctrl+shift+1插入行注释，再按ctrl+z撤销后，就能正常使用了.