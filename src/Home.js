import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './components/actions/cartActions';

class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        var item_HTML_TABLE = "";
        item_HTML_TABLE = this.props.items.map(item=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.price}</td>
                    <td><button type="button" onClick={() => this.handleClick(item.id)} className="btn btn-danger btn-sm">Lägg till</button></td>
                </tr>
            )
        })

        return(
            <div className="container">
               <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Erbjudanden</h4>
                                    
                            </div>
                            <div className='card-body'>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Namn</th>
                                            <th>Avdelning</th>
                                            <th>Pris</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item_HTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}    

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home) 