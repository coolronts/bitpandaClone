import tw from "tailwind-styled-components";

export const SplitScreen = ({ left: Left, right: Right }) => {
  const Container = tw.div`flex`
  const Pane = tw.div`w-1/2`

  return (
    <Container>
      <Pane> <Left /> </Pane>
      <Pane> <Right /> </Pane>
    </Container>
  );
};
