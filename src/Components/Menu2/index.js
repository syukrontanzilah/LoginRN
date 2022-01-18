import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const Menu2 = ({image, title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapImg}>
            <Image style={styles.img} source={image}/>
            </View>
            <Text style={styles.textMenu}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Menu2

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightgray',
        flexDirection:'row',
        width: '49%',
        marginBottom:10,
        padding:10,
        borderRadius: 15,
        alignItems:'center',
        paddingLeft:20
    },
    wrapImg:{
        width:responsiveWidth(42),
        height:responsiveHeight(42),
        backgroundColor: colors.primary,
        borderRadius:40/2,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:17,
        height:17,
    },
    textMenu:{
        fontSize:16,
        fontFamily: fonts.primary.bold,
        marginLeft:10,
        color: '#444444'
    }
})
