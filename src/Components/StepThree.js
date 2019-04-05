import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import store, {STEP_THREE} from '../store'

class StepThree extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent,
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
        const reduxState = store.getState() 
        const {name, address, city, state, zip, img, mortgage, rent} = reduxState
        const newHouse = {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        }
        axios
            .post('/api/houses', newHouse)
            .then(this.setState({
                redirect: true
            }))
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
          })
        })
      }


    saveChanges(){
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
    }
    render(){
        const redirect = this.state.redirect
        if(redirect === true){
            return <Redirect to='/' />
        }
        return (
            <div>
                <input id='mortgage' type='number' placeholder='mortgage'
                value={this.state.mortgage} onChange={this.handleChange}/>
                <input id='rent' type='number' placeholder='rent'
                value={this.state.rent} onChange={this.handleChange}/>
            
                <Link to="/wizard/step2">
            <button onClick={() => this.saveChanges()} className='left_button'>Previous Step</button>
            </Link>
    
            <button onClick={this.handleAdd}>Complete</button>

                
            </div>
        )
    }
}

export default StepThree