import React from 'react'

export default class Searchbar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <input onChange={this.props.onChange} type="text" />
                <input type="checkbox" />
            </div>
        )

    }
}