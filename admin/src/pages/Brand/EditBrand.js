import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import getBrandByNameApi from '../../Api/getBrandByNameApi';

export default function EditBrand() {
    const [brand, setbrand] = useState({})
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        async function fetchData() {
            console.log("searchParams", searchParams.get("Brand"));
            let body = {
                "brand_name": searchParams.get("Brand")
            }
            console.log("bodyy",body);
            let response=await getBrandByNameApi(body)
            console.log("response",response);
        }
        fetchData();
    }, [])


    return (
        <div>EditBrand</div>
    )
}
