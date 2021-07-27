import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from "../Components/Button";
import TextView from '../Components/TextView';
import { showMessage, hideMessage } from "react-native-flash-message";
import Spinner from 'react-native-loading-spinner-overlay';

export default function App({ navigation }) {

    const [showSpinner, setShowSpinner] = useState(false);
    const [email, setEmail] = useState('');


    function onClickReset() {
        console.log("sup");
        if (!email || email.length <= 0) {
            showMessage({ type: 'danger', message: 'Please enter a valid email address' })
            return
        }

        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
            showMessage({ type: 'success', message: 'Password reset instructions sent to your email address' })
            navigation.goBack()
        }, 1000);
    }

    return (
        <View style={authStyles.container}>
            <Spinner
                visible={showSpinner}
                textContent={'Please Wait...'}
                spinnerTextStyle={{ color: 'white' }}
            />
            <TouchableOpacity style={authStyles.back} onPress={() => {
                navigation.goBack()
            }}>
                {<Ionicons size='30' name='ios-close' color='gray' />}
            </TouchableOpacity>
            <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />
            <Image style={authStyles.logo} source={require('../assets/images/logo2.png')} />
            <View style={authStyles.card}>
                <View style={authStyles.cardBg}></View>
                <Text style={authStyles.login}>Reset Password</Text>

                <Text style={authStyles.info}>
                    Please enter your email address below. We will email you your password
                </Text>
                <TextView onChangeText={(text) => setEmail(text)} title='Email' placeholder='Eneter your email address here' />
                <Button title='Reset' type='big' onPress={onClickReset}></Button>
            </View>
            <StatusBar style="dark" />
        </View>
    );
}




