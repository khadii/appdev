import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <View style={tw`flex-1 bg-white `}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
       
      >
        <View  style={tw`pt-14 gap-y-6`}>
          <View style={tw`mx-4 flex-row justify-between items-center mb-2`}>
            <Image
              source={{ uri: "https://bit.ly/dan-abramov" }}
              style={[{ height: hp(5), width: hp(5.5) }, tw` rounded-full`]}
            />
            <BellIcon size={hp(4)} color="gray" />
          </View>
          {/* greetings punchline */}
          <View style={tw`mx-4 gap-y-2 mb-2`}>
            <Text style={[{ fontSize: hp(1.7) }, tw`text-neutral-600`]}>
              Hello, Kadii
            </Text>
            <View style={tw``}>
              <Text
                style={[
                  { fontSize: hp(3.8) },
                  tw`text-neutral-600 font-semibold`,
                ]}
              >
                Make your own food,
              </Text>
            </View>
            <Text
              style={[
                { fontSize: hp(3.8) },
                tw`text-neutral-600 font-semibold`,
              ]}
            >
              Stay at{" "}
              <Text
                style={[
                  { fontSize: hp(3.8) },
                  tw`text-amber-400 font-semibold`,
                ]}
              >
                Home
              </Text>
            </Text>
          </View>

          {/* searchbar */}
          <View style={tw`mx-4 flex-row item-center  rounded-full bg-black/5 p-[6px]`}>
            <TextInput  placeholder="search any recipe" 
            placeholderTextColor={'gray'}
            style={[{fontSize:hp(1.7)},tw`flex-1 text-base mb-1 pl-3 tracking-wider`]}/>
            <View style={tw`bg-white rounded-full p-3`}>
              <MagnifyingGlassIcon size={hp(2.5)} color={'gray'} strokeWidth={3}/>
            </View>
          </View>
          {/* categories section */}
          <View>
            
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
