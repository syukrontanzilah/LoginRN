import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ImgApple } from '../../assets/images'
import { responsiveWidth, responsiveHeight } from '../../utils/util'
import { colors } from '../../utils/colors'

const ButtonIcon = ({image}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.img}
            source={image}/>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width: responsiveWidth(60),
        height:responsiveHeight(55),
        borderColor:'lightgray',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    img:{
        width: responsiveWidth(35),
        height: responsiveHeight(38),
    }
})
