import tw from "tailwind-styled-components";

export const SplitScreen = ({ left: Left, right: Right }) => {
  const Contaianer = tw.div`flex`
  const Pane = tw.div`w-1/2`

  return (
    <div>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};
