import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNoteAction } from "../redux/action/notesAction";

import './form.css'

const emptyNote = {
    title: '',
    content: ''
}

const AddNote = () =>{
    const dispatch = useDispatch()
    const [note, setNote] = useState(emptyNote)

    const handleChange = (e) =>{
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        if(note.title === '' || note.content=== ''){
            return alert('please fill the form!')
        }
        e.preventDefault()
        
        dispatch(addNoteAction(note))

        setNote(emptyNote)
        return alert('submit successful')
    }
    return(
        <div className="formContainer">
            <div>
                <h3>Notes Taking App </h3>
                <p>This is a simple notes taking app built using react redux, you can add your note down below</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                value={note.title}
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Add Title"
                />

                <input
                value={note.content}
                onChange={handleChange}
                name="content"
                type="text"
                placeholder="Add Content"
                />

                <button className="add-btn" type='submit'>Add</button> 
            </form>
            <a href="">Enroll in the course</a>
        </div>
    )
}

export default AddNote