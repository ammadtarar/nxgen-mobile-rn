import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { authStyles } from "../styles";


const TextView = (props) => {


    return (
        <View style={props.type == 'search' ? authStyles.searchBox : ''}>


            <Text displ style={props.type == 'search' ? authStyles.searchTitle : authStyles.field}>{props.title}</Text>
            <TextInput
                value={props.value}
                secureTextEntry={props.secureText || false}
                onChangeText={props.onChangeText}
                style={props.type == 'search' ? authStyles.searchInput : authStyles.input}
                placeholder={props.placeholder}
            />
        </View>
    );
}


export default TextView;


