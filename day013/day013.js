const express = require('express');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});