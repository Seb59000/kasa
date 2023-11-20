import { useState } from 'react'
import './Collapse.css'
import arrow from '../../assets/arrowCollapse.png'

function Collapse({ label, text, page }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className='button' onClick={() => setOpen(!open)}>{label}
                <span className={open ? "span rotateInvert" : "span rotate"}>
                    <img src={arrow} alt='ouverture du collapse' />
                </span>
            </button>
            {open && (
                <p className='text'>{text}</p>
            )}
        </div>
    )
}
export default Collapse;