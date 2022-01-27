
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component{

    render(){

        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item=>{
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <p>{item.department} {item.name}: {item.price} kr</p>
                        <button className="waves-effect waves-light btn pink remove">Ta bort</button>
                    </li>
                )
            })
        ):
        (
            <p>Inga sparade tillval</p>
        )

        return(
            <div className="container">
                <p>Din offert</p>
                <ul>
                    {addedItems}
                </ul>                
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart);