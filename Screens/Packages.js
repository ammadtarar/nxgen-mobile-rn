import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextView from '../Components/TextView';
import Button from '../Components/Button';
const Packages = require('../assets/data/packages');

export default function App() {

    const [showFilters, setShowFilters] = useState(false);
    const [packages, setPackages] = useState(Packages);
    const [testName, setTestName] = useState('');


    const renderItem = ({ item }) => (
        <View style={s.item}>
            <Image style={s.ItemBg} source={item.img} />
            <View style={s.titleCont}>
                <Text style={s.itemTitle}>{item.name}</Text>
                <Text style={s.price}>Rs.{item.price}</Text>
            </View>
        </View >
    );

    function applyFilters() {
        if (!testName || testName.length <= 0) {
            setRates(Rates);
            setShowFilters(false);
            return
        }
        var filtered = [];
        Rates.forEach(item => {
            if (item.name.toLowerCase().includes(testName.toLowerCase())) {
                filtered.push(item)
            }
        });
        setRates(filtered);
        setShowFilters(false);
    }

    function clearFilters() {
        setTestName('');
        setRates(Rates);
        setShowFilters(false);
    }


    return (
        <View style={s.container}>

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
                                <TextView value={testName} title='Test Name' onChangeText={(text) => { setTestName(text) }} type='search' placeholder='Enter a keyword for the report name' />
                                <View style={s.filtersActions}>
                                    <View style={s.btWrapper}>
                                        <Button onPress={() => { clearFilters(); }} title='Clear Filters' type='searchInvert'></Button>
                                    </View>
                                    <View style={s.hSpacer}></View>
                                    <View style={s.btWrapper}>
                                        <Button onPress={() => { applyFilters(); }} title='Apply Filters' type='search'></Button>
                                    </View>


                                </View>
                            </View>
                        }

                    </View>
                </View>
            }

            <View style={s.filterBtWrapper}>
                <TouchableOpacity onPress={() => { setShowFilters(!showFilters) }}>
                    <View style={s.filterBt}>
                        <Ionicons size={20} name='options' color='black' />
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={packages}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterBtWrapper: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 2
    },
    filterBt: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 10,
        shadowOpacity: 0.4
    },
    item: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 4,
        zIndex: 2,
        overflow: 'hidden',
        position: 'relative',
    },
    ItemBg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
    titleCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
        height: '100%',
        zIndex: 2,
        padding: 20

    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 'auto',
        marginTop: 30,
        color: 'white',
        backgroundColor: 'orange',
        padding: 4,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '800',
        maxWidth: '70%',
        color: 'white',
    },
    sampleName: {
        fontSize: 12,
        color: 'gray',
        marginTop: 10
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
});
