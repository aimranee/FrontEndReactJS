import React, { Component } from 'react';
import plusimg from '../imgs/plus.png';
import imgs from '../imgs/1.png'


class Article extends Component {
    
    render() { 
        let {id} = this.props.info;
        let {name} = this.props.info;
        let {price} = this.props.info;
        let img = '../imgs/'+{id}+'.png';
        console.log(img);
        return (
            <div className="article">
                
                    <img className="artimg" src={imgs} alt=""/>
                    <img className="plusimg" id={id} src={plusimg} alt=""/>
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