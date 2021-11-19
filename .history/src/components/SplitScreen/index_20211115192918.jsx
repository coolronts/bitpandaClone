import tw from "tailwind-styled-components";

export const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight= 'w-1/2',
  rightWeight= 'w-1/2'
}) => {
  const Container = tw.div`flex`
  const Pane = tw.div`w-1/2`

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
