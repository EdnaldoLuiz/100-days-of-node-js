function delay(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error('O tempo deve ser positivo'));
        } else {
            setTimeout(() => {
                resolve(`Resolvido após ${ms} ms`);
            }, ms);
        }
    });
}

async function executeDelays() {
    try {
        const message1 = await delay(1000);
        console.log(message1);

        const message2 = await delay(2000);
        console.log(message2);

        const message3 = await delay(3000);
        console.log(message3);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

executeDelays();