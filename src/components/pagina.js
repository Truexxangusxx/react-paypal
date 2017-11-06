import React from 'react'

export default class Pagina extends React.Component {
    constructor() {
        super()
    }
    
    
    render() {
        const { match: { params } } = this.props;
        return (
            <div class="pagina">
                <h1>Este es el perfil de la persona: {params.id}</h1>

                <div id="paypal-button-container"></div>
            </div>
        )
    }
}