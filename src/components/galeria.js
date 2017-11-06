import React from 'react'
import Persona from './persona.js'

export default class Galeria extends React.Component {
    constructor() {
        super()
    }

    render() {

        let rows = []

        this.props.frc.forEach(function (persona) {
            rows.push(<Persona nombre={persona.nombre} imagen={persona.imagen} edad={persona.edad} id={persona.id} key={persona.nombre} />)
        });


        return (
            <div>
                <h1>Según tu perfil eres compatible con:</h1>

                <br />
                <div class="persona_content">
                    {rows}
                </div>
            </div>
        )
    }
}