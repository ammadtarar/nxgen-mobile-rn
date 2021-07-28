import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { authStyles } from "../styles";
import DatePicker from 'react-native-datepicker'
import { useState } from 'react/cjs/react.development';

const SearchDatePicker = (props) => {

    const [date, setDate] = useState('');

    return (
        <View style={authStyles.searchBox}>


            <Text style={authStyles.searchTitle}>{props.title}</Text>
            <DatePicker
                style={{ width: '100%', marginTop: 8 }}
                date={date}
                mode="date"
                placeholder={props.placeholder}
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        display: 'none'
                    },
                    dateInput: {
                        backgroundColor: '#FAFAFA',
                        borderWidth: 0,
                        borderRadius: 20,
                        textAlign: 'left',
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { setDate(date) }}
            />

        </View>
    );
}


export default SearchDatePicker;


