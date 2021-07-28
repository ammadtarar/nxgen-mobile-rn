import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Dimensions } from 'react-native';
import Button from '../Components/Button';
import TextView from '../Components/TextView';
import SearchDatePicker from '../Components/SeachDatePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';



const reportsData = [
    {
        id: '99',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '1',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '2',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '3',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '4',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '5',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '6',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '7',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '8',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '9',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '10',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '11',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '12',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '13',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '14',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '15',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '16',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '17',
        name: "Some Report",
        date: "21 May 2021",
    },
    {
        id: '18',
        name: "Some Report",
        date: "21 May 2021",
    }
];


export default function App() {
    const [showFilters, setShowFilters] = useState(false);
    const [name, setName] = useState('');
    const [reports, setReports] = useState(reportsData);
    const [filtersHeight, setFiltersHeight] = useState('');



    const renderItem = ({ item }) => (
        <View style={s.item}>
            <Text style={s.itemTitle}>{item.name}</Text>
            <View style={s.itemDateWrapper}>
                <Ionicons size={16} name='ios-calendar-sharp' color='black' />
                <Text style={s.itemDate}>{item.date}</Text>
                <View style={s.itemActions}>
                    <TouchableOpacity>
                        <View style={s.itemAction}>
                            <Ionicons size={18} name='ios-download' color='white' />
                            <Text style={s.itemActionText}>Download</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[s.itemAction, { marginLeft: 8 }]}>
                            <Ionicons size={18} name='ios-eye-sharp' color='white' />
                            <Text style={s.itemActionText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );

    return (
        <View style={s.reports} >


            <View style={s.filters} onLayout={(event) => { setFiltersHeight(event.nativeEvent.layout.height) }}>

                <TouchableOpacity onPress={() => { setShowFilters(!showFilters) }}>
                    <View style={s.filtersTop}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons size={22} name='options' color='orange' />
                            <Text style={s.filtersTitle}>Filters</Text>
                        </View>
                        {<Ionicons size={30} name={!showFilters ? 'ios-arrow-down-circle' : 'ios-arrow-up-circle'} color='orange' />}
                    </View>
                </TouchableOpacity>
                {
                    showFilters &&
                    <View style={s.filtersBottom}>
                        <TextView title='Report Name' type='search' placeholder='Enter a keyword for the report name' />
                        <View style={s.spacer}></View>
                        <SearchDatePicker placeholder='Select a date for the report' title='Report Date'></SearchDatePicker>
                        <View style={s.filtersActions}>
                            <View style={s.btWrapper}>
                                <Button title='Clear Filters' type='searchInvert'></Button>
                            </View>
                            <View style={s.hSpacer}></View>
                            <View style={s.btWrapper}>
                                <Button title='Apply Filters' type='search'></Button>
                            </View>


                        </View>
                    </View>
                }

            </View>



            <FlatList
                style={{ height: Dimensions.get('window').height - (filtersHeight + 120) }}
                data={reports}
                renderItem={renderItem}
                key={item => item.id}
            />


            <StatusBar style="auto" />
        </View>
    );
}

const s = StyleSheet.create({
    reports: {
        width: '100%',
    },
    filters: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingBottom: 10,
        shadowColor: 'gray',
        shadowRadius: 10,
        shadowOpacity: 0.2
    },
    filtersTop: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    filtersTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10
    },
    filtersBottom: {
        marginTop: 20,
        borderTopColor: 'lightgray',
        borderTopWidth: 0.5,
        paddingTop: 20
    },
    spacer: {
        height: 20
    },
    filtersActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    btWrapper: {
        flex: 1,
        height: 50,
    },
    hSpacer: {
        width: 10,
        height: 50
    },
    list: {


    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    itemTitle: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600'
    },
    itemDateWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    itemDate: {
        fontSize: 12,
        marginLeft: 10
    },
    itemActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto'
    },
    itemAction: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20
    },
    itemActionText: {
        fontSize: 12,
        color: 'white',
        marginLeft: 4,
        fontWeight: '600'
    }


});
