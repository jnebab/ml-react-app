import React, { useEffect, useState } from "react"
import Tiger from "./tiger.jpg"
// import Woman from "./woman.jpg"
// import Laptop from "./laptop.jpg"

import * as ml5 from "ml5"

function App() {
  const [predictions, setPredictions] = useState([])

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
  }, [])

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <h3>ML with React</h3>
        <img
          src={Tiger}
          alt="tiger"
          id="image"
          style={{ width: "50%", height: "50%" }}
        />
        {predictions?.length > 0 ? (
          predictions.map((prediction) => <p>{prediction.className}</p>)
        ) : (
          <div>Loading predictions...</div>
        )}
      </header>
    </div>
  )
}

export default App
