import { useState } from "react";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import Stats from "./components/Stats";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Math.max(0, Math.min(100, newScore)) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    setStudents([
      ...students,
      { id: Date.now(), name, score: Number(score) },
    ]);
  };

  return (
    <div className="app">
      <div className="panel">
        <Header />
        <AddStudent addStudent={addStudent} />
        <Stats students={students} />
        <Table students={students} updateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;