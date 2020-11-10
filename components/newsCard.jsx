import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


function NewCards(props){
 
    return (
     
            <ListItem thumbnail>
              <Left>
              </Left>
              <Body>
                <Text>{props.title}</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button danger>
                  <Text>Read More</Text>
                </Button>
              </Right>
            </ListItem>
        
    ); 
  }
  export default NewCards;