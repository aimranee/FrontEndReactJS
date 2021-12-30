import React, { Component } from 'react';
import products from '../data/data';
import Article from './article.js';
import Side from './side.js';

class Section extends Component {
    state = {
        products:products,
        total : 0,
        id : 0,
        data:[]
        
    };

setPlusClick = (id) => {

        let fproducts=null;
        let newTotal = this.state.total+products[id].price;
        
        fproducts=products[id];

        this.setState({
            total:newTotal
        });

        if (fproducts.qtt!==0){
            
            fproducts.qtt++;

        }
            
        else{
            this.setState({
                data: this.state.data.concat(fproducts)
            });
            fproducts.qtt++;
        }
        
    };

    dataFilterHandle=(e)=>{

        let fdata=products.filter(d=> d.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({products:fdata})

    }

    dataRemove=(id)=>{
        let newTotal = this.state.products[id].price*this.state.products[id].qtt;
        let total = this.state.total-newTotal;
        let prodf = this.state.products[id];
        prodf.qtt=0;
        let rows = this.state.data.filter(d=>d.id !== id+1);
        this.setState({
            data:rows,
            total:total
        })

    }

    render() { 
        let articles = this.state.products.map(e=><Article name="details" key={e.id} pagehandle={this.props.pagehandle} info={e} plusClick={this.setPlusClick} />);

        let side = null;
        // console.log(this.state.products);
        if(this.state.data.length>0){
            side = this.state.data.map((e)=> <Side key={e.id} remove={this.dataRemove} info={e} />);
        }
                
        return (
            <section>
                <article>
                    {articles}
                </article>
                <aside>
                    
                    <div id="search">
                        <input type="text" onChange={this.dataFilterHandle} placeholder="chercher un produit ..."/>
                    </div>
                    <div id="total" className="title">Total: {this.state.total}DH</div>
                        {side}
                </aside>
            </section>
        );
    }
}
 
export default Section;