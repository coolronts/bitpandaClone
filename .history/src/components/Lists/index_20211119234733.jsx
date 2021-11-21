import PropTypes from 'prop-types'
import React from 'react'

export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  const styles = {
    body:"flex w-full justify-between py-12"
  }
  return (
    <div className={styles.body}>
      {items.map((item) => (
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


export const ColumnList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
 }) => {
  const styles = {
    body: "flex flex-col w-full justify-between py-12",
    container: "m-auto"
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {items.map((item) => (
          <ItemComponent key={item.id} {...{ [resourceName]: item }} />
        ))}
      </div>
    </div>
  )
}

ColumnList.propTypes = {
  items: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired,
  itemComponent: PropTypes.func,
}
