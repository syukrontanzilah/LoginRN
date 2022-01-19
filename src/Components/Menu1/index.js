import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconBPJS, IconEPAY, IconLOAN } from '../../assets/icons'
import { fonts } from '../../utils'

const Menu1 = ({title, type}) => {
const Icon = () => {
    if(type==="epay")
        return <IconEPAY/>
    if(type==="bpjs")
        return <IconBPJS/>
    if(type==="loan")
        return <IconLOAN/>
    return <IconLOAN/>
}
    return (
        <TouchableOpacity
        style={styles.container}
        >
            <Icon/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Menu1

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    
    },
    text:{
        color: 'gray',
        fontFamily: fonts.primary.bold,
        fontSize:16,
        marginLeft:5
    }
})
