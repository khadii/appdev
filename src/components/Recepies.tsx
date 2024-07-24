import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Recepies() {
  return (
    <View style={tw` mx-4 gap-y-3`}>
      <Text style={[{fontSize:hp(3)},tw`font-semibold text-neutral-600`]}>Recepies</Text>
      <View>
        
      </View>
    </View>
  )
}