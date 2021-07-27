import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { authStyles } from "../styles";


const TextView = (props) => {


    return (
        <View >
            <Text style={authStyles.field}>{props.title}</Text>
            <TextInput style={authStyles.input} placeholder={props.placeholder} />
        </View>
    );
}


export default TextView;


