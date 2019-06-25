import React,{useEffect,useReducer} from 'react';
import notesReducer from '../reducers/note'
import NodeList from './NodeList';
import AddNoteForm  from './AddNoteForm';
import NotesContext from '../context/note-context';

const NoteApp = () => {

    //const [notes, setNotes] = useState([])
    const [notes,dispatch]=useReducer(notesReducer,[]);    

    // const removeNote = (title)=>{        
    //     dispatch({type: 'REMOVE_NOTE',title});        
    // }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));

        if (notes) {           
            dispatch({type: 'POPULATE_NOTES',notes});
        }
        
    }, [])
    
    useEffect (()=>{
        localStorage.setItem('notes',JSON.stringify(notes));
        
    },[notes])   

    return (
        <NotesContext.Provider value={{notes,dispatch}}>
            <h1>Notes</h1>
            <NodeList   />
           <AddNoteForm  />
        </NotesContext.Provider>
    )
}

export {NoteApp as default}