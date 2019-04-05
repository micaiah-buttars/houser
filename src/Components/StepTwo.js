import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_TWO} from '../store'

class StepTwo extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
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
            img: reduxState.img
          })
        })
      }

      saveChanges(){
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
    }
    

    render(){
        return (
            <div>
                <input id='img' type='text' placeholder='img' 
                value={this.state.img} onChange={this.handleChange}/>
            
            <Link to="/wizard/step1">
            <button onClick={() => this.saveChanges()} className='left_button'>Previous Step</button>
            </Link>
            <Link to="/wizard/step3">
            <button onClick={() => this.saveChanges()} className='left_button'>Next Step</button>
            </Link>
            </div>
        )
    }
}

export default StepTwo