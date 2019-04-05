import React, { Component } from 'react'

class House extends Component {
    constructor(){
        super()
    }

    deleteHouse = () => {
        // console.log(this.props.index)
        // const index = this.props.key
        this.props.deleteHouse(this.props.index)
    }

    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zip}</p>
                <button onClick={this.deleteHouse}>Delete</button>

            </div>
        )
    }

}

export default House