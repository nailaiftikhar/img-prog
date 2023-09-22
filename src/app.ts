import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import appRouter from './routes/appRoutes';
import path from 'path'

const app = express();
const port = process.env.PORT || 3000;

const upload = multer();

app.use(upload.any());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use("/api", appRouter);
// API Demo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on port http://127.0.0.1:${port}`);
});
