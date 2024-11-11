import React, { useContext } from 'react'
import './add-btn.css';
import { editImg } from '../../assets/image';
import { NotesContext } from '../../context/notesProvider';

const AddBtn = () => {
    const { setHideModal } = useContext(NotesContext)
  return (
    <button className='add-btn' onClick={()=>{setHideModal(false)}}>
        <img src={editImg} alt="" />
    </button>
  )
}

export default AddBtn