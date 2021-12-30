import React, { Component } from 'react';
import del from '../imgs/del.png'

class Side extends Component {

    render() { 
        
        let {id} = this.props.info;
        let {name} = this.props.info;
        let {qtt} = this.props.info;


        return (
            <div className="chartitem">
                <div><img className="artimgmin"  src={require('../imgs/'+id+'.png').default} alt=""/></div>
                <div className="prodname"> {name} </div>
                <div className="qtt"> {qtt} </div>
                <div><img className="delimg" onClick={()=>this.props.remove(id-1)} id={id} src={del} alt=""/></div>
            </div>
        );
    }
}
 
export default Side;