import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { authStyles } from "../styles";


const Button = (props) => {

    const [layoutStyle, setLayoutStyle] = useState("")
    const [textStyle, setTextStyle] = useState("");

    useEffect(() => {
        if (props.type == 'big') {
            setLayoutStyle(authStyles.bt);
            setTextStyle(authStyles.btText)
        } else if (props.type == 'small') {
            setLayoutStyle(authStyles.btReg);
            setTextStyle(authStyles.btRegText)
        } else if (props.type == 'search') {
            setLayoutStyle(authStyles.btSearch);
            setTextStyle(authStyles.btSearchText)
        } else if (props.type == 'searchInvert') {
            setLayoutStyle(authStyles.btSearchInvert);
            setTextStyle(authStyles.btSearchInvertText)
        } else {
            setLayoutStyle('');
            setTextStyle(authStyles.simpleBt)
        }
    });

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[layoutStyle, props.customStyle]}>
                <Text style={textStyle} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default Button;


