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
            .then( res => this.setState({houses: res.data}))
    }

    render(){
        return (
            <div>
                <Link to='/wizard'>
                <button>Add New Property</button>
                </Link>
                {this.state.houses.map(house => {
                    return <House
                    key={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zipcode={house.zip}
                    />
                })}
            </div>
        )
    }

}

export default Dashboard