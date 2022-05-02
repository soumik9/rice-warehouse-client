import React from 'react';
import { useParams } from 'react-router-dom';
import './inventorySingle.scss'

const InventorySingle = () => {

    let params = useParams();

    return (
        <div>
            <h1>Invoice {params.productId}</h1>
        </div>
    );
};

export default InventorySingle;