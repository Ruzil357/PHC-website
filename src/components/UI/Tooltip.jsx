import React, { useEffect, useState } from 'react'

function Tooltip({ children, tooltipText, className }) {
  const [visible, setVisible] = useState({ overlay: false, real: false })

  useEffect(() => {
    let timeout
    if (!visible.overlay) {
      timeout = setTimeout(() => {
        setVisible({
          overlay: false,
          real: false,
        })
      }, 250)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [visible])

  function handleMouseEnter() {
    setVisible({
      overlay: true,
      real: true,
    })
  }

  function handleMouseLeave() {
    setVisible({
      overlay: false,
      real: true,
    })
  }

  return (
    <div
      className={`relative flex items-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {visible.real && (
        <div
          className={`absolute whitespace-no-wrap bg-gray-800 text-white px-4 py-2 rounded flex items-center transition-all duration-200 left-full ${
            visible.overlay ? 'ml-2.5 opacity-1' : 'ml-1 opacity-0'
          }`}
        >
          <div className="bg-gray-800 h-3 w-3 absolute -left-0.5 rotate-45" />
          {tooltipText}
        </div>
      )}

      {children}
    </div>
  )
}

export default Tooltip
