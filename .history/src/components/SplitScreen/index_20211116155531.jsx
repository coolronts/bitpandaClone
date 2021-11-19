import tw from "tailwind-styled-components";

const Container = tw.div`flex flex-wrap`;

const Pane = tw.div`${(props) => {
  if (!props) {
    props='w-1/2'
  }
}}`;

export const SplitScreen = ({
	children,
}) => {
	const [left, right] = children;
	return (
		<Container>
			<Pane>
				{left}
			</Pane>
			<Pane>
				{right}
			</Pane>
		</Container>
	);
}

