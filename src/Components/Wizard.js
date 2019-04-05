import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleChange = e => {
        let {key, value} = e.target
        this.setState({
            [key]: value
        })
    }
    handleAdd = () => {
        const {name, address, city, state, zipcode} = this.state
        const newHouse = {
            name,
            address,
            city,
            state,
            zipcode
        }
        axios
            .post('/api/houses', newHouse)
            .then(res => {
                res.status(200).redirect('/')
            })
    }


    render(){
        return (
            <div>
                <input key='name' type='text' placeholder='name' onChange={this.handleChange}/>
                <input key='address' type='text' placeholder='address' onChange={this.handleChange}/>
                <input key='city' type='text' placeholder='city' onChange={this.handleChange}/>
                <input key='state' type='text' placeholder='state' onChange={this.handleChange}/>
                <input key='zipcode' type='number' placeholder='zipcode' onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>Complete</button>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
            </div>
        )
    }

}

export default Wizard