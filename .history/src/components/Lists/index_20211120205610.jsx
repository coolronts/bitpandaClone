import React, {useEffect} from 'react'

import PropTypes from 'prop-types'

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
  lastElement,
  increaseLimit
  
}) => {
  const styles = {
    body: "flex flex-col w-full justify-between py-12",
    
  }
  useEffect(() => {
    console.log(colItems, "collItems")
  },[])
  
  
  return (
    <div className={styles.body}>
      {colItems.map((colItem, index) => (
        <ItemComponent key={colItem.id} {
          ...{
            [resourceName]: colItem,
            target: index == lastElement - 1 ? true : false,
            lastElement: lastElement,
            increaseLimit: increaseLimit
          }} 
        />
      ))}
    </div>
  )
}

ColumnList.propTypes = {
  colItems: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired,
  lastElement: PropTypes.number.isRequired,
  increaseLimit: PropTypes.func.isRequired,
}
