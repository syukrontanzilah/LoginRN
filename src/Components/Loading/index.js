import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts, responsiveHeight } from '../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={colors.white}/>
            <Text style={styles.text}>Loading..</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        height:'100%',
        width:'100%'
    },
    text:{
        color: colors.white,
        fontSize:18,
        fontFamily: fonts.primary.regular,
        marginBottom: responsiveHeight(50)
    }
})
