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
      {customer.map(c => {
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
      })}
    </div>
    
  );
}

export default App;
