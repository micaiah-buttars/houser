import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_ONE} from '../store'

class StepOne extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
        }
    }

    handleChange = e => {
        let {id, value} = e.target
        this.setState({
            [id]: value
        })
    }

    componentDidMount() {
        store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
          })
        })
      }

      saveChanges(){
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }


    render(){
        return (
            <div>
                <input id='name' type='text' placeholder='name'
                value={this.state.name} onChange={this.handleChange}/>
                <input id='address' type='text' placeholder='address'
                value={this.state.address} onChange={this.handleChange}/>
                <input id='city' type='text' placeholder='city'
                value={this.state.city} onChange={this.handleChange}/>
                <input id='state' type='text' placeholder='state'
                value={this.state.state} onChange={this.handleChange}/>
                <input id='zip' type='number' placeholder='zipcode'
                value={this.state.zip} onChange={this.handleChange}/>

                <Link to="/wizard/step2">
          <button onClick={() => this.saveChanges()} className='left_button'>Next Step</button>
        </Link>
            </div>
        )
    }
}

export default StepOne