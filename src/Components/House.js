import React, { Component } from 'react'

class House extends Component {
    constructor(){
        super()
        this.state ={
            
        }
    }

    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zip}</p>
                <button>Delete</button>

            </div>
        )
    }

}

export default House