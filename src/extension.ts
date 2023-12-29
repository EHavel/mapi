import * as vscode from 'vscode';

class MeuCodeLensProvider implements vscode.CodeLensProvider {
  provideCodeLenses(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
    const codeLenses: vscode.CodeLens[] = [];

    // Itera sobre as linhas do documento
    for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
      const line = document.lineAt(lineNumber);

      // Verifica se a linha contém a tag '# Feature'
      if (line.text.includes('## Response')) {
        // Cria um Code Lens para a linha
        const range = new vscode.Range(line.range.start, line.range.end);
        const command: vscode.Command = {
          title: 'Generate Response',
          command: 'extension.generateResponse', // Comando padrão
          arguments: [document],
        };
        const codeLens = new vscode.CodeLens(range, command);

        // Adiciona o Code Lens à lista
        codeLenses.push(codeLens);
      }
    }

    return codeLenses;
  }
}

export function activate(context: vscode.ExtensionContext) {
  // ...

  // Registra o Code Lens Provider
  const codeLensProvider = new MeuCodeLensProvider();
  const disposable = vscode.languages.registerCodeLensProvider(
    {
      language: 'mapi',
      scheme: 'file',
    },
    codeLensProvider
  );

  context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.generateResponse',
      (document: vscode.TextDocument) => {
        vscode.window.showInformationMessage(
          `2 Ação executada para a linha: ${document.lineAt(0)}`
        );

        // vscode.window.showTextDocument(document);

        // for (
        //   let lineNumber = 0;
        //   lineNumber < document.lineCount;
        //   lineNumber++
        // ) {
        //   const line = document.lineAt(lineNumber);
        //   vscode.window.showInformationMessage(
        //     `Ação executada para a linha: ${line}`
        //   );
        // }``
      }
    )
  );
}

// O restante do código da sua extensão...
