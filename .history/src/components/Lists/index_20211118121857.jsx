import PropTypes from 'prop-types'
import React from 'react'

export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  const styles = {
    body:"flex w-full justify-between p-12"
  }
  return (
    <div className={styles.body}>
      {items.map((item => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
		</div>
  )
}

RowList.propTypes = {
  items: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired,
}

