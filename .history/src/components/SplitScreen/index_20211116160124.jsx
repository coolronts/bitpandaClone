import tw from "tailwind-styled-components";

const Container = tw.div`flex w-full`;

const Pane = tw.div`${(props) => props.weight}`;

export const SplitScreen = ({
  children,
  leftWeight = 'w-full',
	rightWeight = 'w-1/2',
}) => {
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
}

