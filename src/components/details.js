import React, { Component } from 'react';

class Details extends Component {
    render() { 
        let {id} = this.props.info;
        console.log(this.props.info);
        return (
            <div className="details">
                <img className='imgg' src={require('../imgs/'+id+'.png').default} alt=""/>
                <p>Name : {this.props.info.name}</p>
                <p>Price : {this.props.info.price}DH</p>
                <p className='detailParag'>{this.props.info.detail}</p>
                <button name="home" onClick={this.props.pageHandle}>Home</button> 
            </div>
        );
    }
}
 
export default Details;