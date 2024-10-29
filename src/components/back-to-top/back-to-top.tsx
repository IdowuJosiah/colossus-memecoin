import React from 'react'
import './back-to-top.scss'
import { BiArrowToTop } from "react-icons/bi";

const BackToTopButton = () => {
    const [topButton, setTopButton] = React.useState(false)

    React.useEffect(()=> {
        window.addEventListener('scroll', function(){
            console.log('Scroll Y', window.scrollY)
            setTopButton(window.scrollY > 1720.6666259765625)
        })
    }, [])

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <button className='back-to-top' style={{display: topButton ? 'block' : 'none'}} onClick={()=> scrollToTop()}>
      <BiArrowToTop/>
    </button>
  )
}

export default BackToTopButton
