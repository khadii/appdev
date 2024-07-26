import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FadeInDown, FadeOut } from 'react-native-reanimated';
import React from "react";
import tw from "twrnc";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
//   import Categories from "../components/Categories";
import Animated from 'react-native-reanimated';

export default function Categories({
  activecat,
  Cat,
  setActivecat,
}: {
  activecat: any;
  setActivecat: any;
  Cat:any
}) {
  return (
    // style= {tw`flex-1  `}
    <Animated.View entering={FadeInDown.duration(500).springify()}  >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // style={{gap:4}}
        contentContainerStyle={[{ paddingHorizontal: 15 }, tw`gap-x-4 `]}
        
      >
        {Cat.map((cat:any, index:any) => {
            let isActive=cat.strCategory==activecat
            let activeButtonClass=isActive?`bg-amber-400`:`bg-black/10`;
          return (
            <TouchableOpacity key={index}
            onPress={()=>(setActivecat(cat.strCategory))}
            
            style={tw`flex items-center gap-y-1`}>
             <View style={tw`rounded-full  p-[6px] ${activeButtonClass} `}>
             <Image
                source={{ uri: cat.strCategoryThumb }}
                style={[{ width: hp(6), height: hp(6) }, tw`rounded-full`]}
              />
             </View>
              <Text style={[tw`text-neutral-600  `, { fontSize: hp(1.6) }]}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
