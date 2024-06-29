import Nav from "./Nav.jsx"
import { useState } from "react"
function Stulist(props) {
    const stu = props.stu
    const setstu=props.setstu
    function favourite(i)
    {stu[i].fav=true
        // setstu([...stu,{stu[i].fav:true}])
        console.log(stu[i].fav)
    }
    
    return (<>
        <Nav />
        <h1>Student list</h1>
{
    stu.map(function(item,index){
        return(
        <p>{item.n}<button onClick={()=>favourite(index)} className="p-1 border border-black rounded-md hover:bg-white bg-yellow-200">Add to fav</button></p>)
    })
}



    </>)
}
export default Stulist