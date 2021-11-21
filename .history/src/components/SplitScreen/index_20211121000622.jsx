import PropTypes from 'prop-types'
import React from "react"
import tw from "tailwind-styled-components"

const Container = tw.div`${(props) => props.weight}`;

const Pane = tw.div`${(props) => props.weight}`;

const SplitScreen = ({
	children,
	containerWeight = 'flex w-full',
  leftWeight = 'w-1/2',
	rightWeight = 'w-1/2',
}) => {
	const [left, right] = children;
	return (
		<Container className={containerWeight}>
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
	containerWeight: PropTypes.string,
	leftWeight: PropTypes.string,
	rightWeight: PropTypes.string,
}
