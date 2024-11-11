import React, { useContext, useState } from 'react'
import './notes.css'
import { gridImg, listImg } from '../../assets/image'
import NotesItem from './NotesItem';
import { NotesContext } from '../../context/notesProvider';

const Notes = () => {
    const [grid, setGrid] = useState(true);
    const {notes, search, words, lang} = useContext(NotesContext);
    // console.log(notes);
    let list = notes.filter((elem)=>{
        let result = elem.title.concat(elem.desc).toLowerCase().includes(search.toLowerCase())
        return result;
    })
  return (
    <div className='container notes'>
        <div className="notes__header">
            <h2 className="notes__title">
                { list.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }
            </h2>
            <button className='notes__btn' onClick={()=>{setGrid(!grid)}}>
                <img src={ grid ? listImg : gridImg} alt="" />
                <span>{ grid ? words.list[lang] : words.grid[lang] }</span>
            </button>
        </div>
        <div className={ grid ? "notes__content" : "notes__content active"}>
            {
                list.map((elem)=>{
                    return <NotesItem grid={grid} note={elem} key={elem.id}/>
                })
            }
            
        </div>
    </div>
  )
}

export default Notes