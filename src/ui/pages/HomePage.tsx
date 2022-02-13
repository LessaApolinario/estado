import { useState } from 'react'

import Button from '../components/Button'

import '../styles/pages/HomePage.css'

function HomePage() {
  const [number, setNumber] = useState(0)

  function somar() {
    setNumber(number + 1)
  }

  function subtrair() {
    setNumber(number - 1)
  }

  function multiplicar() {
    setNumber(number * 2)
  }

  function dividir() {
    setNumber(number / 2)
  }

  return (
    <div className="counter-box">
      <h1>Contador</h1>
      <p>{number}</p>

      <div className="btns">
        <Button
          text="Somar 1"
          onClick={somar}
        />

        <Button
          text="Subtrair 1"
          onClick={subtrair}
        />

        <Button
          text="Multiplicar por 2"
          onClick={multiplicar}
        />

        <Button
          text="Dividir por 2"
          onClick={dividir}
        />
      </div>
    </div>
  )
}

export default HomePage
