import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍길동',
    'birthday':'961121',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':1,
    'image':'https://placeimg.com/64/64/2',
    'name':'아무개',
    'birthday':'960101',
    'gender':'남자',
    'job':'백수'
  },
  {
    'id':1,
    'image':'https://placeimg.com/64/64/3',
    'name':'김말똥',
    'birthday':'960202',
    'gender':'남자',
    'job':'집사'
  },
]

function App() {
  return (
    <div>
      <Customer
        id={customer[0].id}
        image={customer[0].image}
        name={customer[0].name}
        birthday={customer[0].birthday}
        gender={customer[0].gender}
        job={customer[0].job}
      />
      <Customer
        id={customer[1].id}
        image={customer[1].image}
        name={customer[1].name}
        birthday={customer[1].birthday}
        gender={customer[1].gender}
        job={customer[1].job}
      />
      <Customer
        id={customer[2].id}
        image={customer[2].image}
        name={customer[2].name}
        birthday={customer[2].birthday}
        gender={customer[2].gender}
        job={customer[2].job}
      />
    </div>
    
  );
}

export default App;
