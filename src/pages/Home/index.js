import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ImageApplicant, ImageBookmark, ImageJobPosting, ImageYourProject } from '../../assets/images'
import { Gap, HeaderMenu, Menu1, Menu2, SearchHome } from '../../Components'
import { colors, fonts, responsiveWidth } from '../../utils'

const Home = () => {
    return (
        <ScrollView style={styles.page}>
            <HeaderMenu/>
            <Gap height={80}/>
            <SearchHome/>

            <View style={styles.wrapText}>
            <Text style={styles.wlcmTo}>Welcome to Kerja 365</Text>
            <Text style={styles.desc}>Arrange all you need here</Text>
            </View>

            <View style={styles.boxMenu}>
            <Menu1 type="epay" title="ePay Slip"/>
            <Menu1 type="bpjs" title="BPJS"/>
            <Menu1 type="loan" title="Loan"/>
            </View>

            <View style={styles.wrapText}>
            <Text style={styles.wlcmTo2}>Service By Category</Text>
            <Text style={styles.desc}>Find what you need</Text>
            </View>

            <View style={styles.boxMenu2}>
                <Menu2 title="Applycant" image={ImageApplicant}/>
                <Menu2 title="Bookmark" image={ImageBookmark}/>
                <Menu2 title="Job posting" image={ImageJobPosting}/>
                <Menu2 title="Your Project" image={ImageYourProject}/>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex:1,
    },
    wrapText:{
        paddingHorizontal:responsiveWidth(20),
        marginTop:20,
        marginBottom:20
    },
    wlcmTo:{
        fontSize:25,
        fontFamily: fonts.primary.bold,
    },
    wlcmTo2:{
        fontSize:20,
        fontFamily: fonts.primary.bold,
    },
    desc:{
        fontSize:16,
        fontFamily: fonts.primary.regular
    },
    boxMenu:{
        backgroundColor: 'lightgray',
        borderRadius: 30,
        marginHorizontal:responsiveWidth(20),
        padding:20,
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxMenu2:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:responsiveWidth(20),
        borderColor: 'lightblue',
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:10,
        paddingTop:10,
        flexWrap:'wrap'
    }

})
