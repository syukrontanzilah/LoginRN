import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { responsiveWidth } from '../../utils/util'

const Input = ({label, placeholder, secureTextEntry, type, onPress, value, onChangeText}) => {
    const [border, setBorder] = useState('lightgray')
    const onFocusForm = () =>{
        setBorder(colors.primary)
    }
    const onBlurForm = () =>{
        setBorder(colors.lightgray)
    }
    
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View>
            <TextInput
            style={styles.input(border)}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            value={value}
            onChangeText={onChangeText}
            />          
            </View>
         
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label:{
        fontSize:16,
        fontFamily: fonts.primary.regular,
        marginBottom:5,
        marginTop:10
    },
    input:(border)=> ({
        borderColor:border,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:colors.lightgray,
        paddingHorizontal:15,
        fontSize:16,
        fontFamily: fonts.primary.regular
    }),
    iconWrap:{
        position:'absolute',
        zIndex:100,
        // backgroundColor:'wheat',
        height: 50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        right:responsiveWidth(5)
    }
})
