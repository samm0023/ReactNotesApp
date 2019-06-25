import  React,{useContext}  from "react";
import Note from './Note'
import NotesContext from '../context/note-context'

const NodeList = ({removeNote})=>{
   const   {notes} = useContext(NotesContext);

    return   notes.map((note) => {
        // eslint-disable-next-line no-unused-expressions
        return <Note key={note.title} note={note} removeNote={removeNote}/>
    })
}


export {NodeList as default}