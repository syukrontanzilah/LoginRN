import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBack } from '../../assets/icons'
import { colors } from '../../utils/colors'
import { responsiveWidth } from '../../utils/util'

const Header = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
            >
                <IconBack/>
            </TouchableOpacity>
           <TouchableOpacity style={styles.EN}>
               <Text style={styles.textEN}>EN</Text>
           </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
        justifyContent:'space-between',
        flexDirection:'row',
        zIndex:100,
        position:'absolute',
        right:responsiveWidth(20),
        left:responsiveWidth(20),
        top:20
    },
    EN:{
        backgroundColor:colors.primary,
        width:35,
        height:35,
        borderRadius:35/2,
        justifyContent:'center',
        alignItems:'center',
    },
    textEN:{
        color:colors.white,
        fontSize:20
    }
})
