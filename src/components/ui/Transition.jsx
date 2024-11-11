import React, { useEffect, useRef } from 'react'

const Transition = (props) => {
    const {children, className, show, onClick} = props;
    const elem = useRef(null)
    useEffect(()=>{
        if (elem.current && show) {
            elem.current.style.display = 'none';
        }
    }, [])

    useEffect(()=>{
        if (elem.current && show) {
            elem.current.classList.add(`${className}_hide`)
            setTimeout(() => {
                elem.current.style.display = 'none';
            }, 500);
        } else if(elem.current && !show) {
            setTimeout(() => {
                elem.current.classList.remove(`${className}_hide`) 
            }, 50);
            elem.current.removeAttribute('style');
        }
    })
    // console.log(elem);

  return (
    <div ref={elem} className={className} onMouseDown={onClick} >
        {children}
    </div>
  )
}

export default Transition