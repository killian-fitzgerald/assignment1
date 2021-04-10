import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (
    <Grid.Column width={12}>

        <Segment color='red'>
            <Header as='h2' textAlign='center' color='red'>
                CSGO Skins Listing
            </Header>
        </Segment>

        <Grid>
            {props.menu.map((Skins, index) => {
            return <MenuItem 
                key={Skins.id}
                image={Skins.image}
                alt={Skins.alt}
                price={Skins.price}
            />
            })}
        </Grid>

    </Grid.Column>
  )
};

export default Menu;
