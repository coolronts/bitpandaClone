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
  colItems,
	resourceName,
  itemComponent: ItemComponent,
  lastElement
}) => {
  const styles = {
    body: "flex flex-col w-full justify-between py-12",
    container: "m-auto"
  }
  console.log(lastElement,"element")
  
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {colItems.map((colItem, index) => (
        <ItemComponent key={colItem.id} {
          ...{
            [resourceName]: colItem,
            target: index == lastElement-1 ? true : false
          }} 
          />
        ))}
      </div>
    </div>
  )
}

ColumnList.propTypes = {
  colItems: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired,
  lastElement: PropTypes.number.isRequired,
}
