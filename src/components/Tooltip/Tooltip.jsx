import React, { useState, useRef } from "react";
import InfoIcon from "../Icons/InfoIcon";
import { CSSTransition } from "react-transition-group";

const Tooltip = () => {
  const nodeRef = useRef(null);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
      <InfoIcon className="tooltip__icon" />
      <CSSTransition
        nodeRef={nodeRef}
        in={hover}
        timeout={200}
        classNames="tooltip__content"
        unmountOnExit
      >
        <div className='tooltip__content' ref={nodeRef}>
          <p className='tooltip__text'>This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.</p>
          <a href='#/' className='tooltip__link'>View Public Profile</a>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Tooltip;