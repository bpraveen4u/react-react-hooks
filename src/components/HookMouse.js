import React, { useState, useEffect } from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePoistion = (e) => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect logged')
    window.addEventListener('mousemove', logMousePoistion)

    return () => {
      console.log('component unmounting code')
      window.removeEventListener('mousemove', logMousePoistion)
    }
  }, [])

  return (
    <div>
      Hook X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
