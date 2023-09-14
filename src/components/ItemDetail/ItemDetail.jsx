import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {

    const handleOnAdd = (count) => {
        console.log("se agrego al carrito: ",count)
    };
 

    return (
        <div className='container detailsStyle'>
            <h1 className='text-center titleStyle' >{item.name}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={item.img} className='rounded mx-auto d-block img_med' alt={item.nombre} />
                </div>
                <div className='col'>
                    <h3>DESCRIPCION:</h3>
                    <p>{item.description}</p>
                    <br />

                    <h3>PRECIO: {item.price}</h3>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail