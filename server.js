const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req, res)=>{
  res.send([
    {
      'id' : 1,
      'image' : 'https://placeimg.com/64/64/1',
      'name': '이름01',
      'birthday' : '821111',
      'gender' : '남자',
      'job' : '대학생1'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': '이름02',
    'birthday' : '821112',
    'gender' : '남자',
    'job' : '대학생2'
  },
  {
    'id' : 3,
    'name': '이름03',
    'image' : 'https://placeimg.com/64/64/3',
    'birthday' : '821113',
    'gender' : '남자',
    'job' : '대학생3'
  },
  {
    'id' : 4,
    'name': '이름04',
    'image' : 'https://placeimg.com/64/64/4',
    'birthday' : '821114',
    'gender' : '남자',
    'job' : '대학생4'
  }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));