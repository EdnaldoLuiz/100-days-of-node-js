const fs = require('fs');
const path = require('path');

class FileManager {
  constructor(baseDir) {
    this.baseDir = baseDir;
    this.assetsDir = path.join(this.baseDir, 'assets');
    this.filePath = path.join(this.assetsDir, 'example.txt');
  }

  ensureAssetsDirExists() {
    if (!fs.existsSync(this.assetsDir)) {
      fs.mkdirSync(this.assetsDir, { recursive: true });
      console.log('Diretório assets criado com sucesso.');
    } else {
      console.log('Diretório assets já existe.');
    }
  }

  createOrReplaceFile(content) {
    fs.writeFile(this.filePath, content, (err) => {
      if (err) throw err;
      console.log('Arquivo criado ou substituído com sucesso.');
      this.readFile();
    });
  }

  readFile() {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Conteúdo do arquivo:', data);
      this.appendToFile('\nAdicionando uma nova linha.');
    });
  }

  appendToFile(content) {
    fs.appendFile(this.filePath, content, (err) => {
      if (err) throw err;
      console.log('Conteúdo adicionado com sucesso.');
      this.readUpdatedFile();
    });
  }

  readUpdatedFile() {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Conteúdo atualizado do arquivo:', data);
    });
  }

  // Método para deletar um arquivo, caso necessário
  deleteFile() {
    fs.unlink(this.filePath, (err) => {
      if (err) throw err;
      console.log('Arquivo removido com sucesso.');
    });
  }

  execute() {
    console.log('Executando FileManager...');
    console.log(`Base Directory: ${this.baseDir}`);
    console.log(`Assets Directory: ${this.assetsDir}`);
    console.log(`File Path: ${this.filePath}`);
    this.ensureAssetsDirExists();
    this.createOrReplaceFile('Hello, world!');
  }
}

const fileManager = new FileManager(process.cwd());
fileManager.execute();