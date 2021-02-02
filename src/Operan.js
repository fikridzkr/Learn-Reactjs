import React, { Component } from 'react'

export default class Operan extends Component {
    // gantiMakanan(baru){
    //     this.setState({
    //         makanan : baru
    //     })
    // }
    render() {
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>Operan State yg menjadi props : {makanan}</h2>
                <button onClick={() => gantiMakanan('pancong')}>Ganti Makanan</button>
            </div>
        )
    }
}
