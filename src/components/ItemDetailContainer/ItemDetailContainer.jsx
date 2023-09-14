import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { listadoProdutos } from '../../data/asyncMock';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()   //State donde grabo el item  segun el id
    const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos

/* Promesa para obtener el producto por el Id */
const getProductById = (id) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
		}, 1000)
	})
}

    useEffect(() => {
        setLoad(true)
        getProductById(id)
            .then(productos => {
                setSelectedItem(productos)
                setLoad(false)
            })
            .catch(err =>
                console.warn(err)
            )
    }, [id])
 




    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </>
    )
}

export default ItemDetailContainer