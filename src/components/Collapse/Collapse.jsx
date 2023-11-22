import { useState } from 'react'
import './Collapse.css'
import arrow from '../../assets/arrowCollapse.png'

function Collapse({ label, text }) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open)
    }

    return (
        <div>
            <button className='button' onClick={toggle}>{label}
                <span className={open ? "span rotateInvert" : "span rotate"}>
                    <img src={arrow} alt='ouverture du collapse' />
                </span>
            </button>
            <div className={open ? "text show" : "text hide"}>
                <p >{text}</p>
            </div>
        </div>
    )
}
export default Collapse;