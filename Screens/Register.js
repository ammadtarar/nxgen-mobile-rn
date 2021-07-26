import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { login } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group'

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
        <ScrollView style={styles.sv}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => {
                    navigation.goBack()
                }}>
                    {<Ionicons size='30' name='ios-close' color='gray' />}
                </TouchableOpacity>
                <Image style={styles.bg} source={require('../assets/images/gradient.png')} />
                <Image style={styles.logo} source={require('../assets/images/logo2.png')} />
                <View style={styles.card}>
                    <View style={styles.cardBg}></View>
                    <Text style={styles.login}>Register </Text>
                    <Text style={styles.info}>
                        Step ({step}/2){"\n"}
                        {step == 1 ? 'Please enter a valid email address and set a password' : 'Great ! Now tell us a little about yourself'}
                    </Text>

                    {
                        step == 1 ?
                            <View>
                                <Text style={styles.field}>Username</Text>
                                <TextInput style={styles.input} placeholder='Enter your username here' />
                                <Text style={styles.field}>Password</Text>
                                <TextInput style={styles.input} placeholder='Enter your password here' />
                                <Text style={styles.field}>Confirm Password</Text>
                                <TextInput style={styles.input} placeholder='Enter your password again here' />
                            </View>
                            :
                            <View>
                                <Text style={styles.field}>Name</Text>
                                <TextInput style={styles.input} placeholder='Enter your full name here' />
                                <Text style={styles.field}>Gender</Text>
                                <RadioGroup
                                    containerStyle={{ marginBottom: 20, marginTop: 5 }}
                                    layout='row'
                                    radioButtons={radioButtons}
                                    onPress={onPressRadioButton}
                                />
                                <Text style={styles.field}>Mobile</Text>
                                <TextInput style={styles.input} placeholder='Enter your mobile number here' />
                                <Text style={styles.field}>Address</Text>
                                <TextInput style={styles.input} placeholder='Enter your address here' />
                                <Text style={styles.field}>City</Text>
                                <TextInput style={styles.input} placeholder='Enter your city here' />
                            </View>

                    }



                    <TouchableOpacity onPress={() => {
                        step == 1 ? setStep(2) : navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    }}>
                        <View style={styles.bt}>
                            <Text style={styles.btText}>
                                {
                                    step == 1 ? 'Register' : 'Save'
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.notRegistered, styles.spacing]} >
                    <Text>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Text style={styles.btReg}>Login</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="dark" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create(login);


