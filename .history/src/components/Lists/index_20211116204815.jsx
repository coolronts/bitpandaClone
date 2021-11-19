export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
  console.log(items)
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
		</>
  )
}