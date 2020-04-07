import React, { Component } from 'react';

export default class Display extends Component{
    render(){
        const finalAns = this.props.value;
        return(
            <div className="row ans-container">
                <div className="col-12 cal-ans">{finalAns}</div>
            </div>
        )
    }
}