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
                    if (item.fav == true) { return (<p>{item.n} <button onClick={() => remove(index)}>Remove</button></p>) }

                })
            }
        </>

    )
}
export default Favlist