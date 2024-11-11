import Navbar from './components/navbar'
import Notes from './components/notes'
import NotesProvider from './context/notesProvider'
import Modal from './components/modal'
import AddBtn from './components/add-btn'

const App = () => {
  
  return (
    <NotesProvider>
      <Navbar/>
      <Notes/>
      <Modal/>
      <AddBtn/>
    </NotesProvider>
  )
}

export default App