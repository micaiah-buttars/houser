import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            redirect: false
        }
    }

    handleChange = e => {
        let {id, value} = e.target
        this.setState({
            [id]: value
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
            .then(this.setState({
                redirect: true
            }))
    }


    render(){
        const redirect = this.state.redirect
        if(redirect === true){
            return <Redirect to='/'/>
        }
        return (
            <div>
                <input id='name' type='text' placeholder='name' onChange={this.handleChange}/>
                <input id='address' type='text' placeholder='address' onChange={this.handleChange}/>
                <input id='city' type='text' placeholder='city' onChange={this.handleChange}/>
                <input id='state' type='text' placeholder='state' onChange={this.handleChange}/>
                <input id='zipcode' type='number' placeholder='zipcode' onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>Complete</button>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
            </div>
        )
    }

}

export default Wizard