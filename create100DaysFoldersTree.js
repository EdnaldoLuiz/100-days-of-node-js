const fs = require('fs');
const path = require('path');

class FolderCreator {
    constructor(baseDir) {
        this.baseDir = baseDir;
    }

    createFolderStructure() {
        console.log(`Criando pastas no diretório: ${this.baseDir}`);
        for (let i = 1; i <= 100; i++) {
            const folderName = this.getFolderName(i);
            const folderPath = path.join(this.baseDir, folderName);
            this.createFolder(folderPath);
            this.createScriptFile(folderPath, folderName);
            this.createReadmeFile(folderPath, folderName);
            console.log(`Pasta, script e README criados em: ${folderPath}`);
        }
    }

    getFolderName(dayNumber) {
        return `day${String(dayNumber).padStart(3, '0')}`;
    }

    createFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
    }

    createScriptFile(folderPath, folderName) {
        const scriptName = `${folderName}.js`;
        const scriptPath = path.join(folderPath, scriptName);
        const scriptContent = `// Script para ${folderName}\nconsole.log('Executando ${scriptName}');\n`;
        fs.writeFileSync(scriptPath, scriptContent);
    }

    createReadmeFile(folderPath, folderName) {
        const readmePath = path.join(folderPath, 'README.md');
        const readmeContent = `# ${folderName}\nEste é o README para esta pasta.\n`;
        fs.writeFileSync(readmePath, readmeContent);
    }
}

const folderCreator = new FolderCreator(process.cwd());
folderCreator.createFolderStructure();