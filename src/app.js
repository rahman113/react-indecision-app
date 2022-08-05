
import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class oldSyntax {
  constructor(){
    this.name = 'Andrew Joseph Mead'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting(){
    return `Hii. I am ${this.name} Welcome philadephia New York`
  }
  
}

const object = new oldSyntax()
const getGreeting = object.getGreeting;
console.log(getGreeting())

class newSyntax {
name = 'Ataur Rahman'
 getGreeting = () => {
  return `Hii. I am ${this.name} Welcome to CapeTown Newzeland`
 }
}

const newSyntaxObj = new newSyntax()
const newSyntaxOb = newSyntaxObj.getGreeting;
console.log(newSyntaxOb())