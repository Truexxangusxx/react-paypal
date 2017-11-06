import React from 'react'

export default class Persona extends React.Component {
    constructor() {
        super()
        
    }
    
    render() {
        let url="/perfil/"+this.props.id;
        return (
            <div class="persona">
                <a href={url}>
                    <div>
                        <img src={this.props.imagen} />
                        <p class="nombre">
                            {this.props.nombre}
                        </p>
                        <p class="edad">
                            {this.props.edad} anios
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}