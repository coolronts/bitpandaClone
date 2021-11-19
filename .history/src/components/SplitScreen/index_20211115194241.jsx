import tw from "tailwind-styled-components";

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight= 'w-1/2',
  rightWeight= 'w-1/2'
}) => {
  const Container = tw.div`flex justify-between px-12`
  const Pane = tw.div`${(p => p.$weight)}`

  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen