
import {Link} from "react-router-dom";
const MenuItem=({menu})=>{

    return(
        <Link to={`/menu/${menu.id}`}>
        <div className="MenuItem">
            <label><li>{menu.name} - \{menu.price}</li></label>

        </div>
        </Link>
    )

}
export default MenuItem;