import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts= () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    
    useEffect( () => {  
        const getProducts = async () => {
            const { data } = await axios.get('https://rice-warehouse.herokuapp.com/products');
            setProducts(data);
            setSpinner(false);
        }
        getProducts();
    }, [])

    return [products, setProducts, spinner, setSpinner];
};

export default useProducts;