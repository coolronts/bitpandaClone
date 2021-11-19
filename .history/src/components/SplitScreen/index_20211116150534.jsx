import React, { useEffect } from 'react'

import tw from "tailwind-styled-components";

export function SplitScreen(props){
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>

  );
};


