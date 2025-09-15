import { Component } from "react"

class ClassEx1 extends Component {
    render() {
        return (
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 mx-auto flex text-white font-bold py-2 px-4 rounded">{this.props.name} Click me</button>
            </div>
        )
    }
}

export default ClassEx1