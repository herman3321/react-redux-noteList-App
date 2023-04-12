import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "../types/noteActionTypes"

const initialState = {
    notes: []
}


export const noteReducer = ( state= initialState, action) =>{
    switch(action.type) {
        case ADD_NOTE:
            const newNote = {
                id: Math.random(),
                title: action.payload.title,
                content: action.payload.content  
            }

            const updatedNotes = [...state.notes, newNote]
            localStorage.setItem('note', JSON.stringify(updatedNotes))
            return{
                notes: updatedNotes
            }

        case FETCH_NOTE:
            return{
                notes: JSON.parse(localStorage.getItem('note')) ?
                JSON.parse(localStorage.getItem('note')) : []
            }

        case DELETE_NOTE:
            const filteredNotes = state.notes.filter((note) =>
            note.id !== action.payload)

            localStorage. setItem('note', JSON.stringify(filteredNotes))
            return{
                ...state,
                notes: filteredNotes
            }

        default:    
        return state
    }
}

