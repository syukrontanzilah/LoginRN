import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImageWallpaper } from '../../assets/images'
import { Button, Gap } from '../../Components'
import { fonts } from '../../utils/fonts'
import { responsiveHeight, responsiveWidth } from '../../utils/util'


export default class Splash extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigation.replace('Home')
    //     }, 3000);
    // }
    render() {
        return (
            <View style={styles.page}>

         <View style={styles.wrapImage}>
             <Image style={styles.img} source={ImageWallpaper}/>
         </View>

         <View style={styles.welWrap}>
             <Text style={styles.welcomText}>make your ideas</Text>
             <Text style={styles.welcomText}>come alive</Text>
         </View>

         <View style={styles.welWrap}>
             <Text style={styles.descText}>Join us to build your awesome idea, there will be</Text>
             <Text style={styles.descText}>more teams you can meet</Text>
         </View>

         <View style={styles.wrapButton}>
             <Button 
             title="Sign Up"
             bckgcolor="lightgray"
             color="black"
             />
             <Gap width={10}/>
             <Button title="Log in"
             onPress={()=> this.props.navigation.navigate('Login')}
             />
         </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:responsiveWidth(20),
        paddingTop: responsiveHeight(20)
    },
    wrapImage:{
        backgroundColor:'lightblue',
        width:'100%',
        height: responsiveHeight(500),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    img:{
        width:responsiveWidth(300),
        height:responsiveHeight(300)
    },
    welWrap:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    welcomText:{
        fontFamily: fonts.primary.bold,
        fontSize:40,
        textTransform:'capitalize'
    },
    descText:{
        fontFamily: fonts.primary.regular,
        fontSize:16,
    },
    wrapButton:{
        // backgroundColor:'yellow',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: responsiveHeight(80)
    }

})
