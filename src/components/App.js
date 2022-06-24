import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(notes);
// function createNote() {
//   return <Note key={notes.id} title={notes.title} content={notes.content} />;
// }

//want to import an array
//grab the properties of each itme in the array.  call each itmem whatever you want.
//in this instance called it oneEntry.
function App() {
  return (
    <div>
      <Header />
      {notes.map((oneEntry) => (
        <Note
          key={oneEntry.key}
          title={oneEntry.title}
          content={oneEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
