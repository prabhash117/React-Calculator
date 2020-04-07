import React, { Component } from 'react';
const buttonData = require('./buttons.json');
export default class Buttons extends Component{
    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this)
      }
    buttonClick(value){
        this.props.buttonClick(value)
    }
    render(){
        const button = buttonData.map((data)=>{
            const colClass = (data.value==='Esc' || data.value==='CE')?'col-6':'col-3';
            let buttonClass= '';
            if(data.type==='opretor'){
                if(data.value==='='){
                    buttonClass = 'cal-button-equal';
                }else{
                    buttonClass = 'cal-button-opretor'
                }
            }
            return(
                <div key={data.id} className={`${colClass} button-box`}>
                    <div className={`cal-button ${buttonClass}`} onClick={()=> this.buttonClick(data.value)}>
                    {(data.value!=='/')?(data.value!=='*')?
                        <span>{data.value}</span>:
                        <span>&#215;</span>:
                        <span>&#247;</span>
                        }
                    </div>
                </div>
            )
        })
        return(
            <div className="row button-container">
                {button}
                {/* <div className="col-6 button-box">
                    <div className="cal-button cal-button-opretor">Esc</div>
                </div>
                <div className="col-6 button-box">
                    <div className="cal-button cal-button-opretor">AC</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">7</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button button-box">8</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">9</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button cal-button-opretor">&#247;</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">4</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button button-box">5</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">6</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button cal-button-opretor">&#215;</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">1</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button button-box">2</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">3</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button cal-button-opretor">-</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button">0</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button button-box">.</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button cal-button-equal">=</div>
                </div>
                <div className="col-3 button-box">
                    <div className="cal-button cal-button-opretor">+</div>
                </div>*/}
            </div> 
        )
    }
}