## Descrição

Esta extensão fornece realce de sintaxe, autocompletar e outros recursos essenciais para trabalhar com arquivos `.mapi` (Markdown API) no Visual Studio Code.

O formato `.mapi` é projetado para criar documentação de API em um formato markdown amigável. Esta extensão visa melhorar a eficiência e a experiência do desenvolvedor ao trabalhar com arquivos `.mapi`.

## Características

- Realce de sintaxe específico para o formato `.mapi`.
- [WIP] Autocompletar para tópicos comuns e campos da API.
- [WIP] Linting para verificar erros comuns e garantir a consistência da documentação.

## Instalação

1. Abra o VS Code.
2. Vá para a Visual Studio Code Marketplace.
3. Pesquise por "mapi".
4. Instale a extensão.
5. Reinicie o VS Code.

## Gramatica

Para o uso da grámatica de sintaxe, usamos https://macromates.com/manual/en/language_grammars

## Uso

Após a instalação, todos os arquivos com a extensão `.mapi` terão automaticamente o realce de sintaxe e os recursos da extensão ativados.

## Como gerar versão de teste?

Na raiz do projeto basta executar:

```bash
vsce package
```

Caso não tenha instalado o `vsce`, use o comando:

```bash
npm install -g vsce
```

## Contribuindo

Estamos abertos a contribuições! Se você encontrou um bug ou deseja adicionar um novo recurso, sinta-se à vontade para abrir uma issue ou pull request no repositório [https://github.com/EHavel/mapi](https://github.com/EHavel/mapi).

## Licença

Esta extensão é licenciada sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
