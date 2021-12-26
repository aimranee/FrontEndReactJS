import React, { PureComponent } from 'react';
import data from '../data/data';
import Article from './article';
import Side from './side';

class Section extends React.Component {
    render() { 
        
        let articles = data.map(e=><Article key={e.id} info={e} />)
        let side = <Side/>;
        // console.log("articles : "+articles);
        return (
            <section>
            <article >
                {articles}
            </article>
            <aside>
                
                <div id="search">
                    <input type="text" placeholder="chercher un produit ..."/>
                </div>
                <div id="total" class="title">Total: 00.00DH</div>
                <div class="panier" id="panier">
                    {side}
                    
                </div>
            </aside>
            </section>
        );
    }
}
 
export default Section;