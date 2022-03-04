// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const theList = require('./reactjuice.json');
// const jp = require('jsonparser');
// const app = require('express')();
// const htmlparser = require('html-parser');
// const axios = require('axios');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    const reactInfo = theList.map( theList => {
		return {
		label: theList.title,
		detail: theList.description,
		link: theList.link
		}
	})
	
	// var infoLink = reactInfo.link;
	console.log('Congratulations, your extension "beeazy" is now active!');
	console.log(reactInfo);

	let disposable = vscode.commands.registerCommand('beeazy.helloWorld', function () {
		

		// var theLink = vscode.env.openExternal(reactInfo.link)
		const firstOne = vscode.window.showQuickPick(reactInfo, {
			 matchOnDetail: true,
			//  onDidSelectItem: (reactInfo) => {
			// 	 vscode.env.openExternal(reactInfo.link)
			//  }
		 }).then(() => {
			//  if(reactInfo == null) return
			 onDidSelectItem: vscode.env.openExternal(reactInfo.link)
			})
		 
		//  .then((selection) => {
		// 	 if (reactInfo !== null) return
		//  })
		
		

	});

	context.subscriptions.push(disposable);
}



// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
