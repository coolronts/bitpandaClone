import PropTypes from 'prop-types'
import React from "react"
import tw from "tailwind-styled-components"

const Container = tw.div`flex w-full px-16 pb-6`;

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

SplitScreen.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
	leftWeight: PropTypes.string,
	rightWeight: PropTypes.string,
}
