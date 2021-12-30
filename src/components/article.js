import React, { Component } from 'react';
import plusimg from '../imgs/plus.png';

class Article extends Component {
    // state = {
    //     page:"home",
    //     data:products
    // }

    // pageHandle=(e)=>{
    //     <Details info={this.state.data[this.state.id]} pageHandle={this.setPageHandle}/>
    // }

    // pageHandle = (e)=>{
    // if(e.target.name==="home")
    //   this.setState({page:"home"})
    // else{
    //   this.setState(
    //     {
    //       page:"details",
    //     })
    // }
    // }

    render() { 
        let {id} = this.props.info;
        let {name} = this.props.info;
        let {price} = this.props.info;
        return (
            <div className="article">
            <img className="artimg" src={require('../imgs/'+id+'.png').default} alt=""/>
            <img className="plusimg" id={id} onClick={()=>this.props.plusClick(id-1)} src={plusimg} alt=""/>
            <div className="info">
                <div>
                    {name} : {price}DH 
                </div>
                
                <button className="detailsBtn" onClick={this.props.pagehandle} key={id} info={this.props.info} >Detail</button>
            </div>
                    
            </div>
        );
    }
}
 
export default Article;