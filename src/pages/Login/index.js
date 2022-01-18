import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import {Header, Input, Button, Gap, ButtonIcon} from '../../Components'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidth } from '../../utils/util'
import { fonts } from '../../utils/fonts'
import { IconHome, IconArrowRight } from '../../assets/icons'
import { ImgGoogle, ImgFacebook, ImgApple } from '../../assets/images'

const Login = ({navigation}) => {
    const[eye, setEye] = useState('')
    return (
        <View style={styles.page}>
              <Header
              onPress={()=>navigation.navigate('Splash')}
              />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.wl} >Sign to continue and manage all you need</Text>

            <View style={styles.inputContainer}>
                <Input
                label="Username"
                placeholder="Enter your username"
                />
                <Input
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={true}
                type="eye"
                />
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
                <Gap height={20}/>
                <Button
                onPress={()=> navigation.navigate('Home')}
                title="Log in"/>
            </View>

            <View style={styles.continueWith}>
                <Text style={styles.cwith}>Continue with</Text>
                <View style={styles.iconButtonWrape}>
                <ButtonIcon image={ImgGoogle}/>
                <ButtonIcon image={ImgFacebook}/>
                <ButtonIcon image={ImgApple}/>
                </View>
            </View>

            <View style={styles.notMember}>
                <Text style={styles.notmbr}>Not a member? </Text>
                <TouchableOpacity>
                    <Text style={styles.register}>Register Now</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.white
    },
    container:{
        flex:1,
        // backgroundColor:'wheat',
        marginTop: responsiveHeight(70),
        marginHorizontal: responsiveWidth(20)
    },
    welcome:{
        fontFamily: fonts.primary.bold,
        fontSize:30,
    },
    wl:{
        fontFamily: fonts.primary.regular,
        fontSize:16, 
        color:'#444444'
    },
    inputContainer:{
        marginTop: responsiveHeight(30)
    },
    forgot:{
        color:colors.primary,
        marginTop:10
    },
    continueWith:{
        marginTop: responsiveHeight(150),
        marginHorizontal: responsiveWidth(50)

    },
    cwith:{
        textAlign:'center',
        marginBottom: responsiveHeight(30),
        fontSize:16, 
        fontFamily: fonts.primary.regular,
    },
    iconButtonWrape:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    notMember:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:responsiveHeight(100),
        marginBottom: responsiveHeight(20)

    },
    notmbr:{
        fontFamily: fonts.primary.regular,
        fontSize:16, 
    },
    register:{
        fontFamily: fonts.primary.bold,
        fontSize:16, 
        color: colors.primary 
    }
})
