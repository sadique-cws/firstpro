import React,{useState} from 'react';
import {View,ScrollView} from 'react-native';
import { Container, List, Tab, Tabs, ScrollableTab } from 'native-base';
import NewsCards from './newsCard';

const exampleImage = require('../assets/av.png')

const category = () => {

    return (
      <Tabs renderTabBar={()=> <ScrollableTab />}>
        <Tab heading="sports">
            <ScrollView><List>
               <NewsCards title="PU annf"/>
               <NewsCards title="this is fadsfda"/>
               <NewsCards title="thfadsfdas"/>
               <NewsCards title="thfadsfadstle"/>
               <NewsCards title="this fadsfadsftle"/>
               <NewsCards title="thfadsfads"/>
               <NewsCards title="fdsaftle"/>
               <NewsCards title="this is title"/>
               <NewsCards title="this is title"/>
            </List></ScrollView>
        </Tab>
        <Tab heading="Crime">
        <ScrollView><List>
               <NewsCards title="PU annf"/>
               <NewsCards title="this is fadsfda"/>
               <NewsCards title="thfadsfdas"/>
               <NewsCards title="thfadsfadstle"/>
               <NewsCards title="this fadsfadsftle"/>
               <NewsCards title="thfadsfads"/>
               <NewsCards title="fdsaftle"/>
               <NewsCards title="this is title"/>
               <NewsCards title="this is title"/>
            </List></ScrollView>
        </Tab>
        <Tab heading="Bollywood">
        </Tab>
        <Tab heading="Music">
        </Tab>
        <Tab heading="Business">
        </Tab>
        <Tab heading="Education">
        </Tab>
        <Tab heading="Tab4">
        </Tab>
        <Tab heading="Tab5">
        </Tab>
      </Tabs>
    )
}

export default category;