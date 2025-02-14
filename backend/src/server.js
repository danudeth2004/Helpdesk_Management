const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createConnection } = require('typeorm');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

createConnection({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false, 
  entities: [require('./models/ticketDB')],
})
  .then(() => {
    console.log('PostgreSQL Connected with TypeORM');
  })
  .catch(error => {
    console.error('PostgreSQL Connection Failed:', error);
    process.exit(1);
  });

app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
