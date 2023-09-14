import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom'; 
import { listadoProdutos } from '../../data/asyncMock';

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos 

/* Promesa para obtener productos (todos o los de su categoría) */
const getProducts = (categoryId) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(categoryId ? listadoProdutos.filter(prod => prod.category === categoryId) : listadoProdutos)
		}, 1000)
	})
}

  useEffect(() => {
    setLoad(true)
    getProducts(categoryId).then(prod => {
      setItems(prod)
      setLoad(false)
    })
  }, [categoryId])


  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
