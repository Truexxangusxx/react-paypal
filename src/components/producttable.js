import React from 'react'
import Productcategory from './productcategory.js'
import Product from './productrow.js'

export default class Producttable extends React.Component {
    constructor() {
        super()
    }

    render() {

        let rows=[]

        this.props.products.forEach(function(product) {
         rows.push(<Productcategory category={product.category} key={product.category}/>)   
         rows.push(<Product name={product.name} key={product.name}/>)   
        });        

        return (
            <div>
                {rows}
            </div>
        )
    }

}