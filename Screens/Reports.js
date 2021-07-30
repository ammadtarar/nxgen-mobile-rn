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



    const renderItem = ({ item }) => (
        <View style={s.item}>
            <Text style={s.itemTitle}>{item.name}</Text>
            <View style={s.itemDateWrapper}>
                <Ionicons size={16} name='ios-calendar-sharp' color='black' />
                <Text style={s.itemDate}>{item.date}</Text>
                <View style={s.itemActions}>
                    <TouchableOpacity>
                        <View style={s.itemAction}>
                            <Ionicons size={18} name='ios-download' color='orange' />
                            <Text style={s.itemActionText}>Download</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[s.itemAction, { marginLeft: 8 }]}>
                            <Ionicons size={18} name='ios-eye-sharp' color='orange' />
                            <Text style={s.itemActionText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={s.reports} >

                {
                    showFilters &&
                    <View style={s.filtersWrapper}>
                        <View style={s.filters} >

                            <TouchableOpacity onPress={() => { setShowFilters(!showFilters) }}>
                                <View style={s.filtersTop}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons size={22} name='options' color='orange' />
                                        <Text style={s.filtersTitle}>Filters</Text>
                                    </View>
                                    {<Ionicons size={30} name={'ios-close'} color='orange' />}
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
                    </View>
                }


                <View style={s.titleContainer}>
                    <Text style={s.pageTitle}>Reports</Text>
                    <TouchableOpacity onPress={() => { setShowFilters(!showFilters) }}>
                        <View style={s.filterBt}>
                            <Ionicons size={20} name='options' color='black' />
                        </View>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={reports}
                    renderItem={renderItem}
                    key={item => item.id}
                />


                <StatusBar style="auto" />
            </View>

        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    reports: {
        flex: 1
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14
    },
    pageTitle: {
        fontSize: 30,
        fontWeight: '800'
    },
    filterBt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filtersWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filters: {
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        paddingBottom: 10,
        shadowColor: 'gray',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        borderRadius: 10
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
        backgroundColor: 'transparent',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'orange'
    },
    itemActionText: {
        fontSize: 12,
        color: 'orange',
        marginLeft: 4,
        fontWeight: '600'
    }


});
