import React, { Component } from 'react'

class LifeCycleClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
        console.log("1. Constructor Method Called");
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 5
        })
    }
    componentDidMount = () => {
        console.log("3. Component Just Add to DOM");
    }
    componentDidUpdate = () => {
        console.log("4. Component Just updated");
    }
    componentWillUnmount = () => {
        console.log("5. Component will be movedOff from DOM");
    }

    render() {
        console.log("2. Render Method Called");
        return (
            <div className='border-2 bg-amber-100 text-black m-2 p-2'>
                <h2>Class Component LifeCycle {this.state.count}</h2>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default LifeCycleClass;