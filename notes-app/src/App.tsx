import { useState } from "react";
import { Note } from "./models/noteModel";
import Header from "./components/header/Header";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./components/notesList/NotesList";
import CreateNotes from "./components/createNotes/CreateNotes";
function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: " Book Review",
      text: "The Design of Everyday Things by Don Norman",
      color: "#FD99FF",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
