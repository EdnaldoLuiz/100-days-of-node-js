exports.submitData = (req, res) => {
    const { name, email } = req.body;
    res.send(`<h1>Dados Recebidos</h1><p>Nome: ${name}</p><p>Email: ${email}</p>`);
};