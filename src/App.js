import Customer from './components/Customer.js';
import './App.css';

const customers = [
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
];


function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
};

export default App;
