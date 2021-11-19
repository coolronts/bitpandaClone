import React, { useEffect } from 'react'

import tw from "tailwind-styled-components";

const Container = tw.div`flex justify-between px-12`
const Pane = tw.div`${(p => p.$weight)}`

export const SplitScreen = (props) => {
  

  useEffect(() => {
    console.log('SplitScreen', props.children)
  }, [])
  return (
    <Container>
      <Pane weight={leftWeight}>
        {/* {left} */}
      </Pane>
      <Pane weight={rightWeight}>
        {/* {right} */}
      </Pane>
    </Container>
  );
};
