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

    deleteHouse = (index) => {
        const id = this.state.houses[index].id

        axios
            .delete(`api/house/${id}`)
            .then(res => {
                this.getHouses()
            })

    }
    

    render(){
        const houses = this.state.houses.map((house, i) => {
            return <House
            key={i}
            index={i}
            name={this.state.houses[i].name}
            address={this.state.houses[i].address}
            city={this.state.houses[i].city}
            state={this.state.houses[i].state}
            zip={this.state.houses[i].zip}
            img={this.state.houses[i].img}
            mortgage={this.state.houses[i].mortgage}
            rent={this.state.houses[i].rent}
            deleteHouse={this.deleteHouse}/>
        })
            

        return (
            <div>
                <Link to='/wizard/step1'>
                <button>Add New Property</button>
                </Link>
                {houses}
            </div>
        )
    }

}

export default Dashboard