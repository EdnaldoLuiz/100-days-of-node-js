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

delay(1000)
    .then((message) => {
        console.log(message);
        return delay(2000);
    })
    .then((message) => {
        console.log(message);
        return delay(3000);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Erro:', error.message);
    });