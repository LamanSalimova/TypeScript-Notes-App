import * as React from "react";
import { Note } from "../../models/noteModel";
import Notes from "../notes/Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <>
      <h2>My notes</h2>
      {renderNotes()}
    </>
  );
};

export default NotesList;
