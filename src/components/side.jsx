import React, { Component } from 'react';

class Side extends Component {
    state = {
            id : 1
        }
        setHandle=(e,id)=>{
            console.log(id)
            
            this.setState(
            {
                page:"details",
                id:e.id
            })
        }
    render() { 
        return (
            <div>
                <div class="chartitem">
                    <div><img class="artimgmin" src="imgs/1.png" alt=""/></div>
                    <div class="prodname">Thikpad X270</div>
                    <div class="qtt">3</div>
                    <div><img class="delimg" src="imgs/del.png" alt=""/></div>
                </div>
            </div>
        );
    }
}
 
export default Side;