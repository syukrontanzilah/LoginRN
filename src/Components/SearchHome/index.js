import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { IconSearch } from '../../assets/icons'
import { fonts } from '../../utils'

const SearchHome = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                 <IconSearch/>
            </TouchableOpacity>
           
            <TextInput
            style={styles.input}
            placeholder="Search your job..."
            />
        </View>
    )
}

export default SearchHome

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        paddingRight:20,
        paddingLeft:15,
        borderColor:'lightgray',
        borderWidth:1
    },
    input:{
        fontFamily: fonts.primary.regular,
        fontSize:16,
        marginLeft:10,
        flex:1
    }
})
