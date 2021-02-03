import React from 'react'

const foods = [
    {
        nama: 'soto',
        harga: 15000
    },
    {
        nama: 'ayam',
        harga: 20000
    },
    {
        nama: 'bakso',
        harga: 18000
    },
    {
        nama: 'bebek',
        harga: 25000
    }
]

// reduce
const pay = foods.reduce((price, makanan) => {
    return price+makanan.harga ;
},0)

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {foods.map((makanan) => ( 
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>

            <h2>Map Filter harga di atas 19000</h2>
            <ul>
                {foods.filter((makanan) => makanan.harga > 19000).map((makanan) => ( 
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>
            <h4>Total Harga : {pay}</h4>
        </div>
    )
}

export default Map
