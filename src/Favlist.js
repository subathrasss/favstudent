import { Link } from "react-router-dom"
import { useState } from "react";
import Nav from "./Nav.jsx";
function Favlist(props) {
    const arr = props.stu
    const setarr = props.setstu
    function remove(i) {
        arr[i].fav=false

        // setarr([...arr,{arr[i].fav:false}])
        console.log(arr[i].fav)
    }
    return (
        <>
            <Nav />
            <h1>Fav student list</h1>
            {
                arr.map(function (item, index) {
                    if (item.fav == true) { return (<p>{item.n} <button className="p-1 border border-black rounded-md hover:bg-white bg-yellow-200" onClick={() => remove(index)}>Remove</button></p>) }

                })
            }
        </>

    )
}
export default Favlist