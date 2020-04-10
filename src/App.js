import React, { Component } from 'react';
import Buttons from './buttons/button';
import Display from './display/display';

const buttonData = require('./buttons/buttons.json');
const Esc = 'Esc';
const CE = 'CE';
const Add = '+';
const Sub = '-';
const mult = '*';
const Divi = '/';
const equl = '=';
const point = '.';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
        ans:'0',
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keydown',this.buttonPress)
  }
  
  buttonPress(event){
    for(let i=0;i<buttonData.length;i++){
        if(buttonData[i].keyCode===event.keyCode){
            this.onButtonClick(buttonData[i].value);
        }
    }
  }
  onButtonClick(value){
    let prevText = this.state.ans;
    let finalAns;
    if(value===Esc){
      finalAns = '0';
    }else if(value===CE){
      finalAns = (prevText.length<=1)? '0' :prevText.substring(0, prevText.length-1);
    }else if(value===Divi || value===Sub || value===Add || value===mult){
      const opretorExist = prevText.charAt(prevText.length-1);
      if(opretorExist===Divi || opretorExist===Sub || opretorExist===Add || opretorExist===mult){
        let newAns = (prevText.length<=1)? 0 :prevText.substring(0, prevText.length-1);
        finalAns = newAns += value;
      }else{
        finalAns = prevText += value;
      }
    }else if(value===equl){
      const lastOpretor = prevText.charAt(prevText.length-1);
      if(lastOpretor===Divi || lastOpretor===Sub || lastOpretor===Add || lastOpretor===mult){
        return false;
      }else{
        finalAns = eval(prevText).toString();
      }
    }else if(value===point){
      if(prevText.lastIndexOf('.')=== -1){
        finalAns = prevText += value;
      }
    }else{
      finalAns = (prevText==='0')? value : prevText += value;
    }
    this.setState({
      ans:finalAns,
    })
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.buttonPress)
  }
  render(){
    const {ans} = this.state;
    return (
      <div id="calculator" className="container">
        <Display value={ans} />
        <Buttons buttonClick={this.onButtonClick}/>
      </div>
    );
  }
}

