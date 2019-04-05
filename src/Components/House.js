import React, { Component } from 'react'

class House extends Component {

    render(){
        const {house} = this.props.house
        return (
            <div>
                <p>{house.name}</p>
                <p>{house.address}</p>
                <p>{house.city}</p>
                <p>{house.state}</p>
                <p>{house.zip}</p>
                <button>Delete</button>

            </div>
        )
    }

}

export default House