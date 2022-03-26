import React, { useState } from 'react';
import style from "../../css/addBrand.module.css"
import { useForm } from "react-hook-form";
import addBrandApi from '../../Api/addBrandApi';

export default function AddBrand() {
  const [message, setmessage] = useState("");
  const [errMessage, seterrMessage] = useState("")

  const { register, handleSubmit, reset } = useForm()

  const SubmitForm = async (data) => {
    console.log("data", data);
    let request = {
      "brandName": data.brandName,
      "brandDesc": data.brandDescription,
      "display_status": data.isActive
    }
    let result = await addBrandApi(request)
    console.log("result", result);
    if (result.status) {
      setmessage(result.message)
    } else {
      seterrMessage(result.message)
    }
    reset()
  }

  return (
    <div className={style.addBrand}>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="brandName">Brand Name</label>
                <input type="text" {...register("brandName", { required: true })} placeholder="Enter Brand Name" />
              </td>
              <td>
                <label htmlFor="isActive">Display Status</label>
                <select {...register("isActive", { required: true })} >
                  <option value="1">Active</option>
                  <option value="2">In-Active</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label htmlFor="brandDescription">Brand Description</label>
                <textarea {...register("brandDescription")} id="" cols="30" rows="10"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit" />
      </form>
      {message && <p>{message}</p>}
      {errMessage && <p>{errMessage}</p>}
    </div>
  );
}
