import MenuList from "./menu-list"
import menus from './data';
import './styles.css'
function TreeView({menus=[]}) {
    console.log("sdsds");
  return (
    <div className="tree-view-container ">
        <MenuList list={menus} />
        </div>
  )
}

export default TreeView