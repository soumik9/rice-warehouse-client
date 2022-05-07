import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts= () => {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {  
        const getProducts = async () => {
            const { data } = await axios.get('https://rice-warehouse.herokuapp.com/products');
            setProducts(data);
        }
        getProducts();
    }, [])

    return [products, setProducts];
};

export default useProducts;