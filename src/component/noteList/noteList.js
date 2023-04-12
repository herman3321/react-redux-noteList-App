import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './noteList.css'
import { deleteNoteAction, fetchNoteAction } from "../redux/action/notesAction";

const NoteList = () =>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchNoteAction())
    
  }, [])

  const notes = useSelector((storeData) =>{
    return storeData.notes
  })

  return(
        <>
          <h1>Note List</h1>
          {notes.map((note)=>(
          <div key={note.id} className="item-container">
            <div className="item-content">
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <button onClick={() =>dispatch(deleteNoteAction(note.id))}>Delete</button>
            </div>
          </div>
          ))}

        </>
    )
}

export default NoteList