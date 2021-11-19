import React from 'react'
import tw from "tailwind-styled-components";

const Container = tw.div`flex justify-between px-12`
const Pane = tw.div`${(p => p.$weight)}`

const SplitScreen = ([
  children,
  leftWeight= 'w-1/2',
  rightWeight= 'w-1/2'
]) => {
  const [left, right] = children;
  
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
};

export default SplitScreen