import * as React from "react";
import { Note } from "../../models/noteModel";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import "./notes.css";
interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mb-3 mt-5 deleteBtn"
            onClick={() => handleDelete(note.id)}
          >
            Delete
            <MdDelete />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
