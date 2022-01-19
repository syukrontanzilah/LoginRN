import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { responsiveHeight } from '../../utils/util'

const Button = ({title, bckgcolor, color, onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container(bckgcolor)}>
            <Text style={styles.text(color)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (bckgcolor)=>({
        backgroundColor: bckgcolor ? bckgcolor : colors.primary,
        paddingVertical:responsiveHeight(15),
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10, 
    }),
    text:(color)=>({
        color: color? color : colors.white,
        fontSize:18,
        fontFamily: fonts.primary.regular
    })
})
