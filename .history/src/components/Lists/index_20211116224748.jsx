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
      {items.map((item, i) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
		</div>
  )
}