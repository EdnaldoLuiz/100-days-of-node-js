describe('Função add', () => {
    it('deve retornar a soma de dois números', async () => {
        const { expect } = await import('chai');
        const { add } = await import('../day025.js');
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('deve retornar um número negativo se a soma for negativa', async () => {
        const { expect } = await import('chai');
        const { add } = await import('../day025.js');
        const result = add(-2, -3);
        expect(result).to.equal(-5);
    });
});