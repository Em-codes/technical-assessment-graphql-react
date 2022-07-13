import React from 'react'

const ToggleBtn = ({activeIndex, i}) => {
    return (
        <>
            <div className="three col">
                <div className={`${activeIndex === i ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </>
    )
}

export default ToggleBtn