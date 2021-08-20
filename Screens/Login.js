import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { authStyles } from '../styles';
import Button from "../Components/Button";
import TextView from '../Components/TextView';
import { showMessage, hideMessage } from "react-native-flash-message";
import Spinner from 'react-native-loading-spinner-overlay';

export default function App({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);


    function login() {
        if (!email || email.length <= 0) {
            showMessage({ type: 'danger', message: 'Please enter a valid email address' });
            return
        }

        if (!password || password.length <= 0) {
            showMessage({ type: 'danger', message: 'Please enter your password' });
            return
        }

        setShowSpinner(true);
        setTimeout(() => {
            goToHome();
        }, 3000);
    };

    function goToHome() {
        setShowSpinner(false)
        showMessage({
            message: "Login Successful",
            type: "success",
        });
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    return (
        <View style={authStyles.wrapper}>

            <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />

            <ScrollView style={authStyles.sv}>

                <View style={authStyles.container}>
                    <Spinner
                        visible={showSpinner}
                        spinnerTextStyle={{ color: 'white' }}
                    />

                    <Image style={authStyles.logo} source={require('../assets/images/logo2.png')} />
                    <View style={authStyles.card}>
                        <View style={authStyles.cardBg}></View>
                        <Text style={authStyles.login}>Login</Text>
                        <TextView onChangeText={(text) => setEmail(text)} title='Username' placeholder='Enter your username here' />
                        <TextView secureText={true} onChangeText={(text) => setPassword(text)} value={setPassword} type='password' title='Password' placeholder='Enter your password here' />
                        <Button type='big' title='Login' onPress={() => {
                            login();
                        }} />
                        <View style={authStyles.forgotPassword}>
                            <Text style={authStyles.forgotText}>Forget your password ?</Text>
                            <Button type='simple' title='Reset Password' onPress={() => {
                                navigation.navigate('ForgotPassword')
                            }} />
                        </View>
                    </View>
                    <View style={authStyles.notRegistered}>
                        <Text style={authStyles.notRegInfo}>Don't have an account ?</Text>
                        <Button title='Register' type='small' onPress={() => {
                            navigation.navigate('Register')
                        }} />
                    </View>
                    <StatusBar style="dark" />

                </View>
            </ScrollView>




        </View>
    );
}




