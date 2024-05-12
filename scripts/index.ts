import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.calculateVW",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No editor is active");
        return;
      }

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText) {
        vscode.window.showInformationMessage(
          "Please select some text to convert to vw"
        );
        return;
      }

      const px = parseInt(selectedText, 10);
      if (isNaN(px)) {
        vscode.window.showInformationMessage(
          "Selected text is not a valid number"
        );
        return;
      }

      vscode.window
        .showInputBox({ prompt: "Enter the resolution for vw calculation:" })
        .then((value) => {
          const resolution = parseInt(value || "1440", 10);
          if (isNaN(resolution) || resolution <= 0) {
            vscode.window.showInformationMessage(
              "Please enter a valid resolution"
            );
            return;
          }

          const vwValue = calculateVW(px, resolution);
          editor.edit((editBuilder) => {
            editBuilder.replace(selection, `${vwValue}vw`);
          });
        });
    }
  );

  context.subscriptions.push(disposable);
}

function calculateVW(px: number, resolution: number): number {
  return (px / resolution) * 100;
}

export function deactivate() {}
