import React from 'react';
import {Text,View} from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <Text>Read Story</Text>
            </View>
        );
    }
}