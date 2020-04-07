import React, { Component } from 'react';
import Buttons from './buttons/button'

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
    this.onButtonClick = this.onButtonClick.bind(this)
  }
  onButtonClick(value){
    let prevText = this.state.ans
    if(value===Esc){
      this.setState({
          ans:'0',
      })
    }else if(value===CE){
      let newAns = (prevText.length<=1)? '0' :prevText.substring(0, prevText.length-1);
      this.setState({
          ans:newAns,
      })
    }else if(value===Divi || value===Sub || value===Add || value===mult){
      const opretorExist = prevText.charAt(prevText.length-1);
      if(opretorExist===Divi || opretorExist===Sub || opretorExist===Add || opretorExist===mult){
        let newAns = (prevText.length<=1)? 0 :prevText.substring(0, prevText.length-1);
        this.setState({
            ans:newAns += value,
        })
      }else{
        this.setState({
          ans:prevText += value,
      })
      }
    }else if(value===equl){
      this.setState({
          ans:eval(prevText).toString(),
      })
    }else if(value===point){
      if(prevText.lastIndexOf('.')=== -1){
        this.setState({
          ans:prevText += value,
        })
      }
    }else{
      this.setState({
        ans:(prevText==='0')? value : prevText += value,
      })
    }
  }
  render(){
    const {ans} = this.state;
    return (
      <div id="calculator" className="container">
        <div className="row ans-container">
        <div className="col-12 cal-ans">{ans}</div>
        </div>
        <Buttons buttonClick={this.onButtonClick}/>
      </div>
    );
  }
}

