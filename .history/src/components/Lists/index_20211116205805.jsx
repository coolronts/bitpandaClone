export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  const styles = {
    body:"flex"
  }
  return (
    <div className={styles.body}>
      {items.map((item, i) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
		</div>
  )
}