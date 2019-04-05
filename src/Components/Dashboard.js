import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from './House';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios
            .get('/api/houses')
            .then( res => 
                this.setState({houses: res.data})
                )
            
    }
    

    render(){
        const houses = this.state.houses.map((house, i) => {
            return <House
            key={i}
            name={this.state.houses[i].name}
            address={this.state.houses[i].address}
            city={this.state.houses[i].city}
            state={this.state.houses[i].state}
            zipcode={this.state.houses[i].zip}/>
        })
            

        return (
            <div>
                <Link to='/wizard'>
                <button>Add New Property</button>
                </Link>
                {houses}
            </div>
        )
    }

}

export default Dashboard