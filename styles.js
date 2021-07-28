import { StyleSheet } from 'react-native';

const authStyles = {
    sv: {
        backgroundColor: 'black'
    },
    bg: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    back: {
        position: 'absolute',
        top: 40,
        left: 16,
        zIndex: 10

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 50
    },
    card: {
        width: '90%',
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        borderRadius: 10,
        overflow: 'hidden'
    },
    cardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        backgroundColor: 'white',
        opacity: 0.5
    },
    login: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 30,
        color: 'orange'
    },
    info: {
        marginTop: -20,
        marginBottom: 30,
        fontSize: 12,
        color: 'black',
        fontWeight: '200'
    },
    field: {
        fontSize: 12,
        marginBottom: 6,
        color: 'gray',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    searchBox: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        borderRadius: 10,
        paddingBottom: 14
    },
    searchTitle: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 10,
        color: 'black'
    },
    input: {
        fontSize: 14,
        marginBottom: 18,
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 6,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6
    },
    searchInput: {
        marginTop: 4,
        fontSize: 14,
        backgroundColor: '#FAFAFA',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 20,
        color: 'black'
    },
    bt: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    btText: {
        color: 'white',
        fontWeight: '800',
        textTransform: 'uppercase'
    },
    btSearch: {
        width: '100%',
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btSearchText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    btSearchInvert: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'orange'
    },
    btSearchInvertText: {
        color: 'orange',
        fontSize: 14,
        fontWeight: '600'
    },
    notRegistered: {
        width: '90%',
        height: 50,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notRegInfo: {
        fontSize: 12,
    },
    btReg: {
        backgroundColor: 'orange',
        padding: 8,
        borderRadius: 4,
        marginLeft: 10
    },
    btRegText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    spacing: {
        marginBottom: 50
    },
    forgotPassword: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
        alignItems: 'center'
    },
    forgotText: {
        fontSize: 12,
        color: 'gray'
    },
    simpleBt: {
        fontSize: 12,
        color: 'orange',
        fontWeight: '600',
        marginLeft: 6
    }
}

module.exports = {
    authStyles: StyleSheet.create(authStyles)
};