import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] =React.useState([]);

  function addNote(newNote){
    setNotes(prevNotes =>{
      return[...prevNotes, newNote];
    });
  }

  function deletNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((toDoNote,index)=>{
        return index !== id;
      })
    });

  }

  return (
    <div>
      <Header />
      <CreateArea addNote = {addNote}/>
      {notes.map((toDoNote,index)=>{
        return(<Note 
        title = {toDoNote.title}
        content = {toDoNote.content}
        key = {index}
        id ={index}
        deleteNote = {deletNote}
        />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
