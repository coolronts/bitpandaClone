export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  console.log(items,"Lists")
  return (
    <>
      {items.map((item, i) => {
        console.log(item)
        // <ItemComponent key={i} {...{ [resourceName]: item }} />
      })}
		</>
  )
}