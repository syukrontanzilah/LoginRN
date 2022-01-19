import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconNotification } from '../../assets/icons'
import { ImageProfile } from '../../assets/images'

const HeaderMenu = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                 <IconNotification/>
                 <View style={styles.notif}>
                    <Text style={styles.angka}>2</Text>
                 </View>
            </TouchableOpacity>
           
            <TouchableOpacity>
                <Image style={styles.img} source={ImageProfile}/>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderMenu

const styles = StyleSheet.create({
    container:{
        // backgroundColor: colors.primary,
        flexDirection:'row',
        marginHorizontal:20,
        position:'absolute',
        right:0,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        zIndex:100
    },
    img:{
        width:35,
        height:35,
        borderRadius:35/2,
        marginLeft:20
    },
    notif:{
        backgroundColor:'red',
        height:15,
        width:15,
        borderRadius:15/2,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        marginLeft:10,
        marginTop:-3
    },
    angka:{
        color:'white',
    }
})
