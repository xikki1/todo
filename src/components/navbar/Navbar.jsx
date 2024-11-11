import React, { useContext, useState } from 'react'
import { backImg, closeImg, searchImg } from '../../assets/image'
import './navbar.css';
import Transition from '../ui';
import { NotesContext } from '../../context/notesProvider';

const Navbar = () => {
  const [hide, setHide] = useState(false)
  const {search, setSearch, words, lang, setLang} = useContext(NotesContext)
  const handleSearch = (e)=>{
    setSearch(e.target.value);    
  }
  const handleClear = ()=>{
    setSearch('')
  }

  return (
    <header className='header'>
      <Transition className="header__content" show={hide}>
        { lang == 'uz' ?
          <button className='header__lang' onClick={()=>{setLang('ru')}} >ru</button>
          :
          <button className='header__lang' onClick={()=>{setLang('uz')}} >uz</button>
        }
        <h2 className='header__title'>
          {words.appbartitle[lang]}
        </h2>
        <button className='header__search' onClick={()=>{setHide(!hide)}}>
          <img src={searchImg} alt="" />
        </button>
      </Transition>
      <Transition className="header__form" show={!hide}>
        <button className='header__back' 
        onClick={()=>{
          setHide(!hide)
          setSearch('')
          }}>
          <img src={backImg} alt="" />
        </button>
        <input 
          type="text" 
          className='header__input container' 
          placeholder={words.appbarseacrch[lang]} 
          onChange={handleSearch}
          value={search}
          />
        <button className='header__close' onClick={handleClear}>
          <img src={closeImg} alt="" />
        </button>
      </Transition>
    </header>
  )
}

export default Navbar