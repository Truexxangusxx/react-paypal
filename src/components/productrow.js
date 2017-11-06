import React from 'react'

export default class Productrow extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <h6>{this.props.name}</h6>
        )
    }
}