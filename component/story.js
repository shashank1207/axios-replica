import React,{useState} from 'react';
import * as font from 'expo-font';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import {AppLoading} from 'expo';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const getFonts = () => font.loadAsync({
    'medium_400': require('../fonts/Roboto-Medium.ttf'),
    'roboto_light': require('../fonts/Roboto-Light.ttf')
});


export default function Story() {

    const [news, setNews] = useState([
        // 1st

        {logo:require('../images/logo.jpg'), auth: 'Axios', time: '10m', topic: 'Coronavirus', Heading:'Better testing can fight more than the pandemic', img:require('../images/1598028195690.jpg'), text:"New coronavirus diagnostics could eventually enable near-constant testing — and herald a future where even common infections no longer go undiagnosed.\n\n"+
        "Why it matters: Rapid testing could be especially important during the winter, when it will become vital to quickly distinguish between an ordinary cold or flu and a new disease like COVID-19.\n\n"+
        "What's happening: New testing technologies are being developed that, while not always as accurate as the PCR tests currently in use, can be done cheaply and quickly, at an accelerated rate that \"matches the kinetics of the virus,\" says Jeff Huber, vice chairman of the cancer diagnostics company Grail and the science lead for the XPRIZE Foundation\'s $5 million rapid COVID testing contest.", key: '1'},

          //  2nd

        {logo:require('../images/logo.jpg'), auth: 'Hans Nicholas', time: '50m', topic: 'Top Stories', Heading:'Biden aims to deflect fights over first Cabinet picks', img:require('../images/biden.jpg'), text:"President-elect Joe Biden has made his choice for secretary of state, three people familiar with the matter tell Axios, moving quickly to assemble a Senate-confirmable Cabinet even as President Trump refuses to concede the election.\n\n"+

        "The big picture: Biden already has said he's made his choice for Treasury, and both picks may be aimed at defusing confirmation fights with Senate Republicans and internal battles with Democratic progressives.", key:'2'},

        // 3rd

        {logo:require('../images/logo.jpg'), auth: 'Shawna Chan', time: '7h', topic: 'Politics & policy', Heading:'Michigan GOP leaders after Trump meeting: "We will follow the law"', img:require('../images/trump.jpg'), text:"Republican leaders in Michigan said they \"have not yet been aware of any information that would change the outcome of the election\" in the state after meeting with President Trump at the White House Friday.\n\n"+

        "Why it matters: The meeting was part of a long-shot effort by Trump and his campaign to prevent Michigan from certifying President-elect Joe Biden’s victory in the state, per NYT. But state Senate Majority Leader Mike Shirkey (R) and Speaker of the House Lee Chatfield (R) made clear they would not be intimidated into diverging from the normal election process.", key:'3'},

        // 4th
        

        {logo:require('../images/logo.jpg'), auth: 'Ina Fried', time: '14th, Oct', topic: 'technology', Heading:'Apple\'s iPhone 12 bets may take time to pay off"', img:require('../images/apple.jpg'), text:"With the iPhone 12, unveiled Tuesday, Apple has made some big technology bets that should boost demand for 5G networks as well as help spur developers to create more advanced augmented reality applications. However, phone buyers will probably have to wait for a payoff.\n\n" +

        "Why it matters: Many tech advances start out as chicken-and-egg problems, with developers waiting for a market to emerge while consumers don't yet see the value in spending more. Apple has the rare ability to push past that block. Because of its size and comparatively focused product line, its support of new technologies like 5G and lidar can vault them into the mainstream.", key:'4'},
    ]);

    const [fontLoaded, setFontLoaded] = useState(false)

    if (fontLoaded){
        return(
            <FlatList
                data = {news}
                renderItem= {({ item }) =>(
                <View style={styles.main}>
                    <View style={styles.upper}>
                        <Image 
                        style={styles.tinyLogo}
                        source={item.logo}
                        />
                        <View style={styles.text}>
                            <View style={styles.author}>
                                <Text style={styles.tex}>{item.auth}</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.detail}>{item.time}</Text>
                                <Text style={styles.detail}> - </Text>
                                <Text style={styles.detail}>{item.topic}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.heading}>
                    {item.Heading}
                    </Text>
                    <Image 
                        style={styles.image}
                        source={item.img}
                    />
                    <View>
                        <Text style={styles.summary}>
                          {item.text}
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Entypo name='share' size={30} color='white'/>
                    </View>
                </View >
                )}
            />
        );
    }
    else{
        return(
            <AppLoading 
                startAsync={getFonts}
                onFinish ={()=>setFontLoaded(true)}
            />
        )
    }
}

const styles = StyleSheet.create({
    main:{
        paddingBottom: 20,
        marginBottom: 20,
        backgroundColor: '#1B1B1B'
    },
    upper:{
        flexDirection: "row",
        margin: 10
    },
    tinyLogo: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5
    },
    text:{
        flexDirection: "column",
        margin: 5
    },
    details:{
        flexDirection: "row",
    },
    tex:{
        color: 'white',
        fontWeight: 'bold',
    },
    detail:{
        color: 'white'
    },
    heading:{
        margin: 10,
        marginLeft: 15,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image:{
        width: screenWidth,
        height: 0.3*screenHeight
    },
    summary:{
        color:'white',
        fontSize: 17,
        margin: 15,
        flex: 1,
        fontFamily: 'roboto_light',
        fontWeight: '500'
    },
    button: {
        width: 50,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
        borderColor: 'white',
        textAlign: 'center',
        margin: 10,
        marginLeft: 0.8*screenWidth
    }
});