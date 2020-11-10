import React, { Component,useState,useEffect } from 'react';
import Head from './components/header';
import Search from './components/search';
import Category from './components/category';
import { Root,Container,Header,Left,Body,Right,Text,Title, Icon, Button } from "native-base";
import * as Font from 'expo-font';


 const app = (props) => {  
  
    return (
     <React.Fragment>
        <Head/>
        <Search/>
        <Category/>
     </React.Fragment>
      
    );
}

export default app;