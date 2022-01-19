import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidth } from '../../utils/util'

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
