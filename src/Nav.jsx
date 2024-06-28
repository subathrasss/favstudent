
import { Link } from "react-router-dom"
function Nav(props)
{
    const stu=props.stu
    function list()
    {

    }
    return(
        <div>
 <div className="bg-yellow-300 text-green-500 text-center gap-10 justify-between">
        <button><Link to='/Stulist'>Student List</Link></button>
        <button  className="p-10"><Link to='/Favlist'>Favourite List</Link></button>
      </div>
        </div>
    )
}
export default Nav