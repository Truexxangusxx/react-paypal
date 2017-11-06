import React from 'react'
import Searchbar from './searchbar.js'
import Producttable from './producttable.js'

export default class Tabla extends React.Component {
    constructor() {
        super()

        this.state = {
            filter: null
        }
    }

    mensaje(ev) {
        let filter = ev.target.value
        console.log(filter);
        this.setState({
            filter: filter
        })
    }

    render() {
        return (
            <div>
                <Searchbar onChange={this.mensaje.bind(this)} />
                <Producttable products={this.props.store} />
            </div>
        )
    }
}