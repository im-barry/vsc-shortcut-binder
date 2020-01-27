// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    var disposable = vscode.commands.registerCommand('extension.ssbConsolelog', function () {
        var editor = vscode.window.activeTextEditor;
        editor.edit(function (editBuilder) {
            editBuilder.insert(editor.selection.start, "console.log('');");
            const position = editor.selection.active;
            var newPosition = position.with(position.line, position.character + 13);
            var newSelection = new vscode.Selection(newPosition, newPosition);
            setTimeout(function(){
                editor.selection = newSelection;
            }, 0);
            
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;