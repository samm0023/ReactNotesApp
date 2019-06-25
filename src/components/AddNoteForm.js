import React,{useState,useContext} from 'react';
import NotesContext from '../context/note-context';
const AddNoteForm  =()=>{
    const {dispatch} = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        debugger
      dispatch({
          type:"ADD_NOTE",
          title,
          body
      })
        setTitle('');
        setBody('');
    }
    return (
        <>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) =>setTitle (e.target.value)} /><br/>
                <textarea value ={body} onChange={(e)=>setBody(e.target.value)} name="" id="" cols="30" rows="10"></textarea><br/>
                <button> add note</button>               
            </form>
        </>
    )
}

export { AddNoteForm as default}