import React, {useState} from 'react'

import '../style/Node.css';

const Node = () => {

  const [mouseDown, setMouseDown] = useState(false);
  const [top, setTop] = useState(30);
  const [left, setLeft] = useState(30);

  let nodeStyle = {
    top: top + 'px',
    left: left + 'px',
  }

  const handleMouseDown = (e) => {
    setMouseDown(true);
  }

  const handleMouseUp = (e) => {
    setMouseDown(false);
  }

  const handleMouseMove = (e) => {
    if(mouseDown === true){
      setLeft(e.clientX - 50);
      setTop(e.clientY - 50);
    }
  }

  return (
    <div className="node" style={nodeStyle} 
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onMouseOut={(e) => handleMouseUp(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      >title</div>
  )
}

export default Node
