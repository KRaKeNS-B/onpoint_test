import React from 'react'

function Ellipse(props) {
  let styleSheet = document.styleSheets[0];

  const ellipse = {
    ...props.position,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#de791b',
    borderRadius: '50%',
    backgroundColor: 'rgba(222, 121, 27, 0.1)',
    position: 'absolute',
    width: props.diameter,
    height: props.diameter,
  }

  const ellipse__children = {
    ...ellipse,
    top:0,
    left:0,
    right:0,
    bottom:0,
  }

  const ellipse__child_1 = {
    ...ellipse__children,
    animation: `${props.animationName} 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
  }

  const ellipse__child_2 = {
    ...ellipse__children,
    animation: `${props.animationName} 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 1s`,
  }

  const ellipse__child_3 = {
    ...ellipse__children,
    animation: `${props.animationName} 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 2s`,
  }

  const ellipse__child_4 = {
    ...ellipse__children,
    animation: `${props.animationName} 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 3s`,
  }

  let keyframes =
    `@keyframes ${props.animationName} {
      0% {
        border-width: 0px;
        width: 0px;
        height: 0px;
        transform: translate(${Math.round(props.diameter / 2) - 1}px, ${Math.round(props.diameter / 2) - 1}px);
        background-color: rgba(222, 121, 27, 1);
      }
      10% {
        background-color: rgba(222, 121, 27, 0.9);
      }
      30% {
        background-color: rgba(222, 121, 27, 0.3);
      }
      40% {
        background-color: transparent;
      }
      100% {
        width: ${props.diameter + 2}px;
        height: ${props.diameter + 2}px;
        transform: translate(-2px, -2px);
        border-width: 1px;
      }
    }`;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return (
    <div style={ellipse}>
      <div style={ellipse__child_1}></div>
      <div style={ellipse__child_2}></div>
      <div style={ellipse__child_3}></div>
      <div style={ellipse__child_4}></div>
    </div>
  )
}

export default Ellipse
