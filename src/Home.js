import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{

    render(){
        var item_HTML_TABLE = "";
        item_HTML_TABLE = this.props.items.map(item=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.price}</td>
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

export default connect(mapStateToProps)(Home) 