import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Logo, LogoUtama } from '../../assets/images'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Home')
        }, 3000);
    }
    render() {
        return (
            <View style={styles.page}>
                <LogoUtama/>
                {/* <View style={styles.ilustrasi}>
                    <Logo/>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ilustrasi:{
        position:'absolute',
        bottom:0,
        right:0,
        opacity:0.2
    }
})
