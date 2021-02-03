import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                makanan : 'Ayam',
                data: {},
                tampilkan: false
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }
    
    ubahMakanan(value){
        this.setState({
            makanan: value
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <h2>Lifecycle</h2>
                <h3>{this.state.makanan}</h3>
                <h3>{this.state.data.title}</h3>
                {this.state.tampilkan && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
                <button onClick={() => this.setState({tampilkan: !this.state.tampilkan})}>rubah</button>
            </div>
        )
    }
}
