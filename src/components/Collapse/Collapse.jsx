import { useState } from 'react'
import './Collapse.css'

function Collapse({ label, text, page }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='container'>
            {/* <script src="https://kit.fontawesome.com/64434449ec.js" crossorigin="anonymous"></script> */}

            <button className='button' onClick={() => setOpen(!open)}>{label}
                <span className='span'> {open ? "↓↓↓" : "↑↑↑"}
                    {/* <i class="fa-solid fa-chevron-down"></i> */}
                </span>
            </button>

            {open && (
                <p className='text'>{text}</p>
            )}
        </div>
    )
}
export default Collapse;