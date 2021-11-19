import tw from "tailwind-styled-components";

const Container = tw.div`flex w-full px-16`;

const Pane = tw.div`${(props) => props.weight}`;

const SplitScreen = ({
  children,
  leftWeight = 'w-1/2',
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

export default SplitScreen
