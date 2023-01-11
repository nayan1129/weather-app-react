import React, { useState } from "react";
import './App.css'

const App = () => {
  const [temperatureValue, settemperatureValue] = useState(10)
  const [temperatureColor, settemperatureColor] = useState("cold")

  const increaseTmpmessage = () => {
    alert("temperature is to high")
  }

  const decreaseTmpmessage = () => {
    alert("temperature is to Low")
  }

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1
    if (newTemperature >= 15) {
      settemperatureColor('hot')
      increaseTmpmessage()
    }
    settemperatureValue(newTemperature)

  }

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1
    if (newTemperature < 10) {
      decreaseTmpmessage()
      settemperatureColor('cold')
    }
    settemperatureValue(newTemperature)

  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C

        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App
