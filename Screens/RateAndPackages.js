import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import Ratelist from './Ratelist';
import Packages from './Packages';

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            navStyle: { height: 50 },
            tabIndex: 0
        }
    }

    componentDidMount() {
        this.getStatusBarHeight()
    }


    getStatusBarHeight() {
        if (Platform.OS == 'android') {
            this.setState({
                navStyle: {
                    height: StatusBarManager.HEIGHT + 50
                }
            })
            console.log('Android State');
            console.log(this.state);
        } else {
            StatusBarManager.getHeight((h) => {
                this.setState({
                    navStyle: {
                        height: h.height + 50
                    }
                });
            })
        }
    }
    render() {
        return (
            <View style={s.container}>
                <View style={[s.topBar, this.state.navStyle]}>
                    <TouchableOpacity style={{ width: '50%' }} onPress={() => { this.setState({ tabIndex: 0 }) }}>
                        <View style={[s.navBtn, this.state.tabIndex == 0 ? s.navSelected : '']}>
                            <Text style={[s.navBtnText, this.state.tabIndex == 0 ? s.navTextSelected : '']}>RateList</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '50%' }} onPress={() => { this.setState({ tabIndex: 1 }) }}>
                        <View style={[s.navBtn, this.state.tabIndex == 1 ? s.navSelected : '']}>
                            <Text style={[s.navBtnText, this.state.tabIndex == 1 ? s.navTextSelected : '']}>Packages</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {
                    this.state.tabIndex == 0 ?
                        <Ratelist /> :
                        <Packages />
                }
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    navBtn: {
        height: 45,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent'
    },
    navBtnText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'gray'
    },
    navSelected: {
        borderBottomColor: 'orange'
    },
    navTextSelected: {
        color: 'orange',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '700'
    }

});
