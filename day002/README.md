# Desafio 2

Utilizando Objetos Globais

## Explicação

### Ferramentas Utilizadas

- `__dirname`: Diretório do script em execução.
- `__filename`: Caminho completo e nome do arquivo do script em execução.
- `process`: Objeto que fornece informações e controle sobre o processo Node.js em execução.

### Funções Principais

- `__dirname`: Retorna o diretório do script em execução.
- `__filename`: Retorna o caminho completo e o nome do arquivo do script em execução.
- `process.argv`: Array contendo os argumentos passados na linha de comando.
- `process.env`: Objeto contendo as variáveis de ambiente do usuário.

## Resultado

```js
console.log("Diretório do script em execução (__dirname):", __dirname);
console.log("Caminho completo do script em execução (__filename):", __filename);

console.log("Argumentos passados na linha de comando (process.argv):", process.argv);
console.log("Variáveis de ambiente (process.env):", process.env);
```