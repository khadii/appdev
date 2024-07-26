import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import axios from "axios";
import Recepies from "../components/Recepies";


export default function Home() {
  const [Cat,setCat]=useState([])
  useEffect(()=>{
    getcategories()
  },[])

  const getcategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      console.log(response.data);
      if (response && response.data) {
        setCat(response.data.categories);
      }
    } catch (err:any) {
      console.log('err', err.message);
    }
  };
  const [activecat,setActivecat]=useState('Beef')
  return (
    <View style={tw`flex-1 bg-white `}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 50 },tw`pt-14 gap-y-6 flex-1`]}
       
      >
       
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
          <View style={tw`mx-4 flex-row items-center  rounded-full bg-black/5 p-[6px]`}>
            <TextInput  placeholder="search any recipe" 
            placeholderTextColor={'gray'}
            style={[{fontSize:hp(1.7)},tw`flex-1 text-base mb-1 pl-3 tracking-wider`]}/>
            <View style={tw`bg-white rounded-full p-3`}>
              <MagnifyingGlassIcon size={hp(2.5)} color={'gray'} strokeWidth={3}/>
            </View>
          </View>
          {/* categories section */}
          <View>
           {Cat.length>0 && <Categories activecat={activecat} setActivecat={setActivecat} Cat={Cat}/>}
          </View>
      
{/* for recepies */}
<View><Recepies Cat={Cat}/></View>
      </ScrollView>
    </View>
  );
}
