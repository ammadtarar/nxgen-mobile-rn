import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group'
import Button from "../Components/Button";
import TextView from '../Components/TextView';

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
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }


    return (
        <ScrollView style={authStyles.sv}>
            <View style={authStyles.container}>

                <TouchableOpacity style={authStyles.back} onPress={() => {
                    navigation.goBack()
                }}>
                    {<Ionicons size='30' name='ios-close' color='gray' />}
                </TouchableOpacity>
                <Image style={authStyles.bg} source={require('../assets/images/gradient.png')} />
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
                                <TextView title='Username' placeholder='Enter your username here' />
                                <TextView title='Password' placeholder='Enter your password here' />
                                <TextView title='Confirm Password' placeholder='Enter your password again here' />
                            </View>
                            :
                            <View>
                                <TextView title='Name' placeholder='Enter your name here' />
                                <RadioGroup
                                    containerStyle={{ marginBottom: 20, marginTop: 5 }}
                                    layout='row'
                                    radioButtons={radioButtons}
                                    onPress={onPressRadioButton}
                                />
                                <TextView title='Mobile' placeholder='Enter your mobile number here' />
                                <TextView title='Address' placeholder='Enter your full address here' />
                                <TextView title='City' placeholder='Enter your city name here' />
                            </View>

                    }


                    <Button type='big' title={
                        step == 1 ? 'Register' : 'Save'
                    } onPress={() => {
                        step == 1 ? setStep(2) : navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    }} />

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
    );
}

