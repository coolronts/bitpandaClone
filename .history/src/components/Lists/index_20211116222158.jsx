export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  console.log(items,"item")
  const styles = {
    body:"flex w-full justify-between"
  }
  return (
    <div className={styles.body}>
      {/* {items.map((item, i) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))} */}
		</div>
  )
}