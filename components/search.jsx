import React from 'react';
import {Header,Icon, Text, Button,Item,Input} from 'native-base';

const search = () => {
    return (
        <Header hasTabs searchBar>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    )
} 

export default search;