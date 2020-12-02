import React, { useEffect } from "react"
import Tiger from "./tiger.jpg"
// import Woman from "./woman.jpg"
// import Laptop from "./laptop.jpg"

import * as ml5 from "ml5"

function App() {
  const classifyImg = () => {
    const classifier = ml5.imageClassifier("MobileNet", modelLoaded)

    function modelLoaded() {
      console.log("Model loaded!")
    }

    const image = document.getElementById("image")

    if (classifier) {
      classifier.predict(image, 5, (err, results) => {
        console.log({ results })
      })
    }
  }

  useEffect(() => {
    classifyImg()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>ML with React</p>
        <img
          src={Tiger}
          alt="tiger"
          id="image"
          style={{ width: "50%", height: "50%" }}
        />
      </header>
    </div>
  )
}

export default App
