import React, { Component } from 'react';
import plusimg from '../imgs/plus.png';

class Article extends Component {

    render() { 
        let {id} = this.props.info;
        let {name} = this.props.info;
        let {price} = this.props.info;
        
        return (
            <div className="article">
                
            <img className="artimg" src={require('../imgs/'+id+'.png').default} alt=""/>
            <img className="plusimg" id={id} onClick={this.props.plusClick} src={plusimg} alt=""/>
            <div className="info">
                <div>
                    {name} : {price} DH 
                </div>
                <button className="detailsBtn">Detail</button>
            </div>
                    
            </div>
        );
    }
}
 
export default Article;