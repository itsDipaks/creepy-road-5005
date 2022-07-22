import { Menu,Button,MenuButton,MenuItem,MenuList} from '@chakra-ui/react'
import "./Navbar.css"

function Option(){
    return ( <>
 
<ul className="option" >
    <li><Menu>
  <MenuButton as={Button} >
  SHOP
  </MenuButton>
  <MenuList>
    <MenuItem>All Fruits</MenuItem>
    <MenuItem>Fresh Cuts</MenuItem>
    <MenuItem>Fruit Combos</MenuItem>
    <MenuItem>Gifts By Kimaye </MenuItem>
    <MenuItem>Grape Family by Kimaye</MenuItem>
    <MenuItem>Return and Replacement</MenuItem>
    <MenuItem>Fruits x Subscription</MenuItem>
    <MenuItem>Community buying</MenuItem>
  </MenuList>
</Menu>  </li>
    <li><Menu>
  <MenuButton as={Button} >
  LEARN
  </MenuButton>
  <MenuList>
    <MenuItem>OUR STORY</MenuItem>
    <MenuItem>WHY KIMAYE</MenuItem>
    <MenuItem>TRACEABILITY</MenuItem>
    <MenuItem>BEYOND FRUITS</MenuItem>
   
  </MenuList>
</Menu>  </li>
    <li><Menu>
  <MenuButton as={Button} >
  GROW
  </MenuButton>

</Menu>  </li>
  
</ul>  

</> 
    )
}
export default Option;