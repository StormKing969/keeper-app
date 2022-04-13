import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="note_section">
        {noteList.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
