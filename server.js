const express = require('express') //express 불러오기
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connection;
require('dotenv').config();

app.use(bodyParser.json()); //req을 json 형태로 파싱
app.use(express.urlencoded({extended:false})); //url 형식의 데이터 전달 false로
app.use(methodOverride('_method'));

app.use('/location',  require('./routes/location'));

app.get('/', (req, res) => {
  res.send('Hello world');
})

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
  }
)

db.on('error', console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
})

app.listen(process.env.PORT, ()=> {
  console.log(`${process.env.PORT} is running`);
});