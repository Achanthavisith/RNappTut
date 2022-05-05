import { View, Text, Image, TextInput } from 'react-native'

import { COLORS, SIZES, FONTS, assets } from '../constants'

const HomeHeader = () => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font
        }}>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
            }}>
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{ width: 90, height: 45 }}
                />

                <View style={{ width: 45, height: 45 }}>
                    <Image 
                        source={assets.person01}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%"}}
                    />

                    <Image 
                        source={assets.badge}
                        resizeMode="contain"
                        style={{ 
                            width: 15, 
                            height: 15,
                            bottom: 0,
                            right: 0,
                            position: 'absolute'
                        }}
                    />
                </View>
            </View>

            <View style={{ marginVertical: SIZES.font}}>
                <Text style={{ fontFamily: FONTS.regular, color: COLORS.white, fontSize: SIZES.small}}>
                        Hello, Victoria
                </Text>

                <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: SIZES.large, marginTop: SIZES.base }}>
                        Let's find a masterpiece
                </Text>
            </View>

            <View style={{marginTop: SIZES.font}}>
                <View style={{ 
                        width: "100%", 
                        borderRadius: SIZES.font,
                        backgroundColor: COLORS.gray,
                        flexDirection: "row",
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.font
                        }}>
                    <Image
                        source={assets.search}
                        resizeMode="contain"
                        style={{ width:20, height: 20, marginRight: SIZES.base}}
                    />

                    <TextInput
                        placeholder='Search NFTs'
                        style={{flex:1}}
                        onChangeText={() => {}}
                    />
                </View>
            </View>
            
        </View>
    )
}

export default HomeHeader