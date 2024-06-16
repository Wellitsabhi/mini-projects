import MenuItem from "./menu-item"

// eslint-disable-next-line react/prop-types
function MenuList({list=[]}) {
  return (
    <ul >
        {
            list && list.length ?  
            list.map((listItem) => <MenuItem item= {listItem} />)
            : null
        }
        </ul>
  )
}


export default MenuList