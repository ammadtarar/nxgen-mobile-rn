module.exports = {
    login: {
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
            justifyContent: 'center',
        },
        logo: {
            width: 200,
            height: 200,
            resizeMode: 'contain'
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
            fontSize: 14,
            marginBottom: 6
        },
        input: {
            marginTop: 4,
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 18,
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
            paddingBottom: 10
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
        notRegistered: {
            width: '90%',
            height: 50,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        btReg: {
            color: 'white',
            backgroundColor: 'orange',
            padding: 8,
            borderRadius: 4,
            marginLeft: 10
        },
        spacing: {
            marginBottom: 50
        }
    }
};