import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../constants";
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Recepies({Cat}:{Cat:any}) {
    console.log("mealData:", mealData); 
  return (
    <View style={tw` mx-4 gap-y-3`}>
    <Text style={[{ fontSize: hp(3) }, tw`font-semibold text-neutral-600`]}>
        Recepies
      </Text>
      <View>
      {Cat.length==0? null : ( <MasonryList
          data={mealData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
          // refreshing={isLoadingNext}
          // onRefresh={() => refetch({first: ITEM_CNT})}
          onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
        />)}
      </View>
    </View>
  );
}
const RecipeCard = ({ item, index }: { item: any; index: any }) => {
  let iseven = index % 2 == 0;
  // the above means skip in twoes starting from the first element
  return (
    // you are adding daping because they are different cards 
    <Animated.View entering={FadeInDown.delay(index*100).springify().damping(12)}>
      <Pressable
        style={[
          {
            width: "100%",
            paddingLeft: iseven ? 0 : 8,
            paddingRight: iseven ? 8 : 0,
          },
          tw` flex justify-center mb-4 gap-y-1`,
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: index % 3 == 0 ? hp(25) : hp(35),
            borderRadius: 35,
          }}
        />
        <Text style={tw`font-semibold ml-2 text-neutral-600`}>
          {item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
