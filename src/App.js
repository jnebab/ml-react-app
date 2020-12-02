import React, { useEffect, useState } from "react"
import Tiger from "./tiger.jpg"
// import Woman from "./woman.jpg"
// import Laptop from "./laptop.jpg"

import * as ml5 from "ml5"

function App() {
  const [predictions, setPredictions] = useState([])
  const [imageURL, setImageURL] = useState("")

  const classifyImg = () => {
    const classifier = ml5.imageClassifier("MobileNet", modelLoaded)

    function modelLoaded() {
      console.log("Model loaded!")
    }

    const image = document.getElementById("image")

    if (classifier) {
      classifier.predict(image, 5, (err, results) => {
        setPredictions(results)
      })
    }
  }

  useEffect(() => {
    classifyImg()
  }, [imageURL])

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <h3>ML with React</h3>
        <div>
          <input type="text" alt="image-url-input" style={{ padding: '5px 10px', width: 350, marginBottom: 15 }} onChange={e => setImageURL(e.target.value)} />
        </div>
        <img
          src={imageURL || Tiger}
          alt="tiger"
          id="image"
          style={{ width: "50%", height: "50%" }}
          crossOrigin="anonymous"
        />
        {predictions?.length > 0 ? (
          predictions.map((prediction, index) => <p key={index}>{prediction.className}</p>)
        ) : (
          <div>Loading predictions...</div>
        )}
      </header>
    </div>
  )
}

export default App
