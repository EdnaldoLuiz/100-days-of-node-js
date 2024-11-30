# Desafio 69

Construindo uma Ferramenta CLI com Node.js

## Explicação

### Ferramentas Utilizadas

- `commander`: Biblioteca para criar interfaces de linha de comando no Node.js.

### Funções Principais

- `program.command()`: Define um novo comando para a CLI.
- `program.option()`: Adiciona uma opção ao comando.
- `program.action()`: Define a ação a ser executada quando o comando é chamado.
- `program.parse()`: Analisa os argumentos da linha de comando.

## Resultado

```js
const { Command } = require('commander');
const program = new Command();

program
  .name('mycli')
  .description('Uma ferramenta CLI simples')
  .version('1.0.0');

program
  .command('greet <name>')
  .description('Saúda uma pessoa pelo nome')
  .option('-u, --uppercase', 'Saudar em letras maiúsculas')
  .action((name, options) => {
    const greeting = `Olá, ${name}!`;
    console.log(options.uppercase ? greeting.toUpperCase() : greeting);
  });

program
  .command('sum <numbers...>')
  .description('Soma uma lista de números')
  .action((numbers) => {
    const result = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    console.log(`A soma é: ${result}`);
  });

program.parse(process.argv);
```