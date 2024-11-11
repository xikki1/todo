import React, { useContext, useEffect, useState } from 'react'
import './modal.css'
import { NotesContext } from '../../context/notesProvider';
import Transition from '../ui';

const Modal = () => {
    const {hideModal, setHideModal, currentId, addNote, noteInfo, 
        changeNote, closeModal, words, lang} = useContext(NotesContext);
    const [input, setInput] = useState('')
    const [textarea, setTextarea] = useState('')
    useEffect(()=>{
        if (noteInfo) {
            setInput(noteInfo.title);
            setTextarea(noteInfo.desc)
        } else {
            setInput('');
            setTextarea('')
        }
    }, [hideModal])

    const addHandler = ()=>{
        let title = input.trim();
        let desc = textarea.trim();
        if (title.length > 0 && desc.length > 0) {
            let obj = {
                id: currentId + 1,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            addNote(obj);
            setHideModal(true);
        }
    }

    const changeHandler = ()=>{
        let title = input.trim();
        let desc = textarea.trim();
        if (title.length > 0 && desc.length > 0) {
            let obj = {
                id: noteInfo.id,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            changeNote(obj);
            setHideModal(true);
        }
    }

  return (
    <Transition className='modal' show={hideModal} onClick={()=>{setHideModal(true)}} >
        <div className="modal__form" onMouseDown={(e)=>{ e.stopPropagation() }}>
            <h3 className="modal__title">
                { noteInfo ? words.titlewindowedit[lang] : words.titlewindow[lang] }
            </h3>
            <div className="modal__content">
                <label>
                    <span>Title</span>
                    <input 
                        type="text" 
                        placeholder='Title' 
                        value={input}
                        onChange={(e)=>{setInput(e.target.value)}}/>
                </label>
                <label>
                    <span>Content</span>
                    <textarea rows={1} 
                        type="text" 
                        placeholder='Content'
                        value={textarea}
                        onChange={(e)=>{ setTextarea(e.target.value) }}/>
                </label>
            </div>
            <div className="modal__controls">
                <button className='btn btn_red' onClick={()=>{closeModal()}}>{words.closebtn[lang]}</button>
                {   noteInfo ?
                    <button className='btn' onClick={changeHandler}>{words.editwindowbtn[lang]} </button>
                    :
                    <button className='btn' onClick={addHandler}>{words.addbtn[lang]} </button>
                }
            </div>
        </div>
    </Transition>
  )
}

export default Modal