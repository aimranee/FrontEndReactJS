import React, { Component } from 'react';

class Details extends Component {
    render() { 
        let {id} = this.props.info;
        return (
            <div className="details">
                <img src={'require(../imgs/'+id+'.png).default'} alt=""/>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.price}</p>
                <p>{this.props.info.Details}</p>
                <button name="home" onClick={this.props.pagehandle}>Home</button> 
            </div>
        );
    }
}
 
export default Details;