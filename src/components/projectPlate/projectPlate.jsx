// import edit from "../../img/minus.svg"
import { Link } from "react-router-dom"
import edit from "../../img/edit.svg"
import arrowRight from '../../img/arrowRight.svg'
import './projectPlate.css'

export default function ProjetPlate({ name = "Empty string" }) {
    return (
        <div className='balance-plate'>
            <div className='balance-plate_leftCol'>
                {/* <img src={minus} alt="delete" /> */}
                <div>
                    <span> {name}</span>
                    <span>Created : 25-07-2020</span>
                </div>
            </div>
            <Link to={`/${name}`} state={{ name: name, data: "25-07-2020" }} className='balance-plate_leftRight'>
                <img src={arrowRight} alt="delete" className="balance-plate-edit-img" />
            </Link>
        </div >
    )
}