"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const handlePredict = async () => {
    try {
      const res = await fetch("https://fake-news-backend-1-nzoc.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      const data = await res.json()
      setResult(data.prediction)
    } catch (error) {
      console.error("Error during prediction:", error)
      alert("Prediction failed. Check if backend is running.")
    }
  }

  return (
    <div className="App">
      <h1>Fake News Detection</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a news article"
        rows={8}
        cols={50}
      />
      <br />
      <button onClick={handlePredict}>Check</button>
      <h2>Prediction: {result}</h2>
    </div>
  )
}

export default App
