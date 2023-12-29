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
          title: 'Gerar Response',
          command: 'extension.executarAcao', // Comando padrão
          arguments: [line.text], // Argumentos adicionais, se necessário
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

  // Registra o comando para 'extension.executarAcao'
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.executarAcao',
      (text: string) => {
        // Lógica para executar a ação quando o Code Lens é clicado
        vscode.window.showInformationMessage(
          `Ação executada para a linha: ${text}`
        );
      }
    )
  );
}

// O restante do código da sua extensão...
