export const RowList = ({
  items,
	resourceName,
	itemComponent: ItemComponent,
 }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
		</>
  )
}