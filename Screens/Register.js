import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group'
import Button from "../Components/Button";
import TextView from '../Components/TextView';
import { showMessage, hideMessage } from "react-native-flash-message";
import Spinner from 'react-native-loading-spinner-overlay';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'male',
    size: 18
}, {
    id: '2',
    label: 'Female',
    value: 'female',
    size: 18
}, {
    id: '3',
    label: 'Others',
    value: 'others',
    size: 18
}]


export default function App({ navigation }) {

    const [step, setStep] = useState(1);
    const [showSpinner, setShowSpinner] = useState(false);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');


    function onPressRadioButton(radioButtonsArray) {
        radioButtonsArray.forEach(element => {
            if (element.selected) {
                setGender(element.value)
                return
            }
        });
    }

    function onClickRegister() {
        if (step == 1) {// REGISTRATION STEP
            if (!username || username.length <= 0) {
                showMessage({ type: 'danger', message: 'Please enter a valid email address' });
                return
            }
            if (!password || password.length <= 0) {
                showMessage({ type: 'danger', message: 'Please enter a valid password' });
                return
            }
            if (!repeatPassword || repeatPassword.length <= 0) {
                showMessage({ type: 'danger', message: 'Please enter the password again' });
                return
            }

            if (password !== repeatPassword) {
                showMessage({ type: 'danger', message: 'Passwords do no match. Please make sure the passwords match' });
                return
            }


            setShowSpinner(true)
            setTimeout(() => {
                setShowSpinner(false)
                setStep(2)
            }, 1000);

        } else {
            if (!name || name.length <= 0) {
                showMessage({ type: 'danger', message: 'Please enter your fullname' });
                return
            }
            if (!gender || gender.length <= 0) {
                showMessage({ type: 'danger', message: 'Please select a gender' });
                return
            }
            if (!mobile || mobile.length <= 0) {
                showMessage({ type: 'danger', message: 'Please enter your phone number' });
                return
            }

            if (address !== address) {
                showMessage({ type: 'danger', message: 'Please enter your full address' });
                return
            }

            if (city !== city) {
                showMessage({ type: 'danger', message: 'Please enter your city name' });
                return
            }

            setShowSpinner(true)
            setTimeout(() => {
                setShowSpinner(false)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                })
            }, 1000);


        }
    }


    return (

        <View style={authStyles.wrapper}>
            <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />
            <ScrollView style={authStyles.sv}>
                <View style={authStyles.container}>
                    <Spinner
                        visible={showSpinner}
                        textContent={'Please Wait...'}
                        spinnerTextStyle={{ color: 'white' }}
                    />
                    <TouchableOpacity style={authStyles.back} onPress={() => {
                        navigation.goBack()
                    }}>
                        {<Ionicons size={30} name='ios-close' color='gray' />}
                    </TouchableOpacity>
                    <Image style={authStyles.logo} source={require('../assets/images/logo2.png')} />
                    <View style={authStyles.card}>
                        <View style={authStyles.cardBg}></View>
                        <Text style={authStyles.login}>Register </Text>
                        <Text style={authStyles.info}>
                            Step ({step}/2){"\n"}
                            {step == 1 ? 'Please enter a valid email address and set a password' : 'Great ! Now tell us a little about yourself'}
                        </Text>

                        {
                            step == 1 ?
                                <View>
                                    <TextView onChangeText={(text) => setUsername(text)} title='Username' placeholder='Enter your username here' />
                                    <TextView secureText={true} onChangeText={(text) => setPassword(text)} title='Password' placeholder='Enter your password here' />
                                    <TextView secureText={true} onChangeText={(text) => setRepeatPassword(text)} title='Confirm Password' placeholder='Enter your password again here' />
                                </View>
                                :
                                <View>
                                    <TextView onChangeText={(text) => setName(text)} title='Name' placeholder='Enter your name here' />
                                    <RadioGroup
                                        containerStyle={{ marginBottom: 20, marginTop: 5 }}
                                        layout='row'
                                        radioButtons={radioButtons}
                                        onPress={onPressRadioButton}
                                    />
                                    <TextView onChangeText={(text) => setMobile(text)} title='Mobile' placeholder='Enter your mobile number here' />
                                    <TextView onChangeText={(text) => setAddress(text)} title='Address' placeholder='Enter your full address here' />
                                    <TextView onChangeText={(text) => setCity(text)} title='City' placeholder='Enter your city name here' />
                                </View>

                        }


                        <Button type='big' title={
                            step == 1 ? 'Register' : 'Save'
                        } onPress={onClickRegister} />

                    </View>
                    <View style={[authStyles.notRegistered, authStyles.spacing]} >
                        <Text style={authStyles.notRegInfo}>Already have an account ?</Text>
                        <Button type='small' title='Login' onPress={() => {
                            navigation.goBack()
                        }} />

                    </View>
                    <StatusBar style="dark" />
                </View>
            </ScrollView>
        </View>

    );
}

