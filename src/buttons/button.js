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
            </div> 
        )
    }
}