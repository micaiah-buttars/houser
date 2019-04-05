import React, { Component } from 'react'

class House extends Component {

    deleteHouse = () => {
        this.props.deleteHouse(this.props.index)
    }

    render(){
        return (
            <div className="houseInfo">
                <img className="image" src={this.props.img} alt=''/>
                <button onClick={this.deleteHouse}>Delete</button>

               <div className="infoContainer">
                <p>Property Name: {this.props.name}</p>
                <p>Address: {this.props.address}</p>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
                <p>Zip: {this.props.zip}</p>
                <p>Monthly Mortgage: ${this.props.mortgage}</p>
                <p> Desired Rent: ${this.props.rent}</p>
               </div>
               

            </div>
        )
    }

}

export default House