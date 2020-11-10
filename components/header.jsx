

import React from 'react';
import {Header,Body,Left,Right,Icon, Text, Title, Button, Badge} from 'native-base';
import {} from 'react-native-easy-grid';

const header = () => {
    return (
        <Header>
            <Left>
            <Button transparent>
            <Icon name='menu' />
            </Button>
            </Left>
            <Body>
                <Title>Aakhoo Dekhi</Title>
            </Body>
            <Right/>

          
        </Header>
    )
}

export default header;