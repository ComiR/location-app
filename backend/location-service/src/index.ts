import express from 'express';
import locationRoutes from './routes/locationRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/locations', locationRoutes);

app.listen(port, () => {
  console.log(`Location service is running on port ${port}`);
});
