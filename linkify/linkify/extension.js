// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// const _ = require('lodash');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "linkify" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.linkify', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Linkify!');

		// vscode.workspace.textDocuments.forEach(function(item, index) {
		// 	console.log('item: '+JSON.stringify(item)+", index: "+index);
		// })

		const editor = vscode.window.activeTextEditor; 
		var selection = editor.selection; 
		var text = editor.document.getText(selection);
		// console.log('text: ' + text);

		// take out [] brackets, ` - YouTube`, ` - Google Search` etc
		// take out e.g. `(21) ` from YouTube
		// linkify - take out extra []

		/* 
		foreach line that has `(http` in it:
			trim whitespace
			remove ` - Google Search ` etc
			add square brackets
			if it has `https://www.google.com/search?`:
				remove everything until `oq=`
				remove everything the rest
		etc
		replace selection...
		*/

/* sample text for testing:
asdfafd
	asdfafd
		asdfasdf(http)
		asdfafd
		[asd]fds (https://asdfasdfds)
[asd]fds    (https://asdfasdfds)
		sdf
*/
		let lines = text.split('\n');
		let newlines = [];
		lines.forEach(function(line) {
			console.log('orig: ' + line);
			let linkStart = line.indexOf('(http');
			if (-1 != linkStart) {
				let newline = line.replace(/[\[|\]]/g, ''); // remove square brackets
				newline = newline.replace(/ - Google Search /g, '');
				newline = newline.replace(/ - YouTube /g, '');
				newline = newline.replace(/ - chrisjbird@gmail.com - Gmail /g, '');
				linkStart = newline.indexOf('(http'); // as chars might have been removed
				newline = newline.substring(0, linkStart) + ']' + newline.substring(linkStart);
				newline = '[' + newline.trim();
				newlines.push(newline);
				console.log('newline: ' + newline);
			}
		})

		let newText = newlines.join('\n');
		editor.edit(builder => builder.replace(selection, newText)); // replace the selection
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
