import React, { useEffect } from 'react'

import tw from "tailwind-styled-components";

const Container = tw.div`flex justify-between px-12`
const Pane = tw.div`${(p => p.$weight)}`

export const SplitScreen = (props) => {
  

  useEffect(() => {
    console.log('SplitScreen', props.children)
  }, [])
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
