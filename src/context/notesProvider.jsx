import React, { createContext, useEffect, useState } from 'react'
export const NotesContext = createContext(null)
import words from '../assets/lang'

const NotesProvider = (props) => {
  const { children } = props
  // console.log(props);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'JavaScript',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 2,
      title: 'React',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 3,
      title: 'Vue',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
  ])
  const [hideModal, setHideModal] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const [noteInfo, setNoteInfo] = useState(null);
  const [search, setSearch] = useState('')
  const [lang, setLang] = useState('ru')

  useEffect(()=>{
    let localNotes = localStorage.getItem('notes')
    localNotes = JSON.parse(localNotes)
    if(localNotes) {
      setNotes(localNotes)
    }
    let localLang = localStorage.getItem('lang')
    if(localLang){
      setLang(localLang)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes));
    let last = notes.length - 1;
    const id = last >= 0 ? notes[last].id : 0;
    setCurrentId(id);
  }, [notes])

  useEffect(()=>{
    localStorage.setItem('lang', lang)
  }, [lang])

  const addNote = (obj)=>{
    const newNotes = [...notes, obj];
    setNotes(newNotes);
    setCurrentId(obj.id)
  }

  const delNote = (id)=>{
    let newNotes = notes.filter((elem) => elem.id != id);
    setNotes(newNotes)
  }

  const editNote = (id)=>{
    let note = notes.find((elem)=> elem.id == id);
    setNoteInfo(note);
    setHideModal(false);
  }

  const changeNote =(note)=>{
    let newNotes = notes.map((elem)=>{
      if (elem.id == note.id) {
        elem.date = note.date;
        elem.desc = note.desc;
        elem.title = note.title;
      }
      return elem
    })
    setNotes(newNotes);
    setNoteInfo(null);
  }

  const closeModal = ()=>{
    setHideModal(true);
    setNoteInfo(null);
  }

  return (
    <NotesContext.Provider value={ 
      { notes, 
        hideModal, setHideModal, 
        currentId, 
        addNote, delNote, editNote, 
        noteInfo, changeNote, closeModal,
        search, setSearch,
        words, lang, setLang
      } 
    }>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider