import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const saveDocument = async () => {
    try {
      const res = await axios.post("http://localhost:5000/save", {
        title,
        content,
      });
      setStatus(res.data.message);
    } catch (error) {
      setStatus("Error saving document ❌");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f4f6f8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "600px",
        background: "#fff",
        padding: "25px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>
          Real-Time Document Editor
        </h2>

        <input
          type="text"
          placeholder="Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <textarea
          placeholder="Start writing your document..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <button
          onClick={saveDocument}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Save Document
        </button>

        {status && (
          <p style={{
            textAlign: "center",
            marginTop: "10px",
            color: "green"
          }}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
