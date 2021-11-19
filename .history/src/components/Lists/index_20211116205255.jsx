export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  console.log(items,"Lists")
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
		</>
  )
}