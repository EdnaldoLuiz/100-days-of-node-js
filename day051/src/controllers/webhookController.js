const handleWebhook = (req, res) => {
    const event = req.body;

    console.log('Evento recebido:', event);

    res.status(200).send('Evento recebido com sucesso');
};

module.exports = { handleWebhook };