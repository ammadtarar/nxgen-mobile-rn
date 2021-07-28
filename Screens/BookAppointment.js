import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TextView from '../Components/TextView';
import RadioGroup from 'react-native-radio-buttons-group';
import { authStyles } from "../styles";
import Button from '../Components/Button';

const gendersData = [{
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


const modesData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    value: 'home',
    label: 'Home Pickup',
    size: 18
}, {
    id: '2',
    value: 'on-site',
    label: 'Visit Lab',
    size: 18
}]


export default function App() {

    const [genders, setGenders] = useState(gendersData);
    const [gender, setGender] = useState('');

    const [modes, setModes] = useState(modesData);
    const [mode, setMode] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [testName, setTestName] = useState('');


    function onPressGenderRadio(radioButtonsArray) {
        radioButtonsArray.forEach(element => {
            if (element.selected) {
                setGender(element.value)
                return
            }
        });
    }

    function onPressModesRadio(radioButtonsArray) {
        radioButtonsArray.forEach(element => {
            if (element.selected) {
                setMode(element.value)
                return
            }
        });
    }


    return (
        <View style={s.container}>
            <ScrollView style={s.sv}>
                <Text style={s.info}>Enter your details to book appointment for medical test , either for home sample pickup or on location testing</Text>
                <TextView onChangeText={(text) => setName(text)} title='Name' placeholder='Your full name' />
                <Text style={authStyles.field}>Gender</Text>
                <RadioGroup
                    containerStyle={{ marginBottom: 20, marginTop: 5 }}
                    layout='row'
                    radioButtons={genders}
                    onPress={onPressGenderRadio}
                />
                <TextView onChangeText={(text) => setPhone(text)} title='Phone' placeholder='Your phone number' />
                <TextView onChangeText={(text) => setEmail(text)} title='Email' placeholder='Your email address' />
                <TextView onChangeText={(text) => setTestName(text)} title='Lab Test Name' placeholder='Which lab test you are seeking ?' />
                <Text style={authStyles.field}>MODE</Text>
                <RadioGroup
                    containerStyle={{ marginBottom: 20, marginTop: 5 }}
                    layout='row'
                    radioButtons={modes}
                    onPress={onPressModesRadio}
                />
                <TextView onChangeText={(text) => setAddress(text)} title='Address' placeholder='Your full address' />
                <TextView onChangeText={(text) => setCity(text)} title='City' placeholder='Your city name' />
                <Button title='Book Appointment' type='big'></Button>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 14
    },
    info: {
        fontSize: 12,
        marginBottom: 20
    },
    sv: {
        display: 'flex',
        flexDirection: 'column'
    }
});
