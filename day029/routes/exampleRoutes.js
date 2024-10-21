const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Retorna uma mensagem de saudação
 *     responses:
 *       200:
 *         description: Mensagem de saudação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Olá, mundo!"
 */
router.get('/hello', (req, res) => {
  res.json({ message: 'Olá, mundo!' });
});

module.exports = router;