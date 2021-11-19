import tw from "tailwind-styled-components";

const Container = tw.div`flex w-full`;

const Pane = tw.div`${(props) => props.weight}`;

export const SplitScreen = ({
  children,
  leftWeight = 'flex-grow',
	rightWeight = 'w-1/2',
}) => {
	const [left, right] = children;
	return (
		<Container>
			<Pane className={leftWeight}>
				{left}
			</Pane>
			<Pane className={rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}

