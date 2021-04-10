import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import Menu from '../../components/Menu/Menu';


const CSGOSkins = (props) => {

    const [menuState, setMenuState] = useState({
        skins: [
          { id: 0, name: 'Dragon Lore', price: 1250, image: 'images/skins/dlore.png', alt: 'Dragon Lore' },
          { id: 1, name: 'AK47 Fire Serpant', price: 750, image: 'images/skins/fire.png', alt: 'Fire Serpant' },
        ]
      });










  return (
      
    <Menu menu={menuState.skins} />
  )
};

export default CSGOSkins;
