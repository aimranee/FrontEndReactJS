import React, { Component } from 'react';
import products from '../data/data';
import Article from './article.js';
import Side from './side.js';

class Section extends Component {
    state = {
        products:products,
        total : 0,
        id : 0,
        qtt : 0
    };

    setPlusClick = (e) => {
        let newTotal = this.state.total+products[this.state.id].price
        this.setState({
            id:e.target.id-1,
            total:newTotal
        });
        
        if (e.target.id == this.state.id+1){
            let newQtt = this.state.qtt+1;
            console.log(newQtt);
            this.setState({
                qtt:newQtt
            });
        }

    };

    render() { 
        let articles = products.map(e=><Article key={e.id} info={e} plusClick={this.setPlusClick} />);
        
        let side = <Side info={products[this.state.id]} key={this.state.id} qtt={this.state.qtt}/>;
        
        return (
            <section>
            <article>
                {articles}
            </article>
            <aside>
                
                <div id="search">
                    <input type="text" placeholder="chercher un produit ..."/>
                </div>
                <div id="total" className="title">Total: {this.state.total}DH</div>
                <div className="panier" id="panier">

                    {side}
                </div>
            </aside>
            </section>
        );
    }
}
 
export default Section;