import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="note_section">
        {notes.map(notes => (
          <Note 
            key = {notes.key}
            title={notes.title}
            content={notes.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
