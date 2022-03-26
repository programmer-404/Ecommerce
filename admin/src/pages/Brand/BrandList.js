import React, { useEffect, useState } from 'react'
import getAllBrandApi from '../../Api/getAllBrandsApi';
import style from "../../css/addBrand.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-edit } from '@fortawesome/free-solid-svg-icons'

export default function BrandList() {
    const [brandArr, setbrandArr] = useState([])
    useEffect(() => {
        fetchData();
        async function fetchData() {
            let result = await getAllBrandApi()
            if (result.data.brandsArr.length > 0) {
                setbrandArr(result.data.brandsArr)
            }
        }
    }, [])

    const editBrand = (data) => {
        window.open(`${window.location.origin}/editBrand?Brand=${data.brand_name}`, "_self")
    }

    return (
        <div className={style.addBrand}>
            <table>
                <thead>
                    <th>Sr. No</th>
                    <th>Brand Name</th>
                    <th>Brand Description</th>
                    <th>Display Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        brandArr.map((ele, id) => {
                            let status = ele.is_active == 1 ? "Active" : "In-Active"
                            return (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{ele.brand_name}</td>
                                    <td>{ele.brand_description}</td>
                                    <td>{status}</td>
                                    <td>
                                        <img src="/img/edit.svg" alt="" onClick={() => { editBrand(ele) }} />
                                        <img src="/img/delete.svg" alt="" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
