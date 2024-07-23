import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type RootStackParamList = {
  Home: undefined;
  // add other routes here if needed
};

const Welcome: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))),
      300
    );
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, [navigation, ring1padding, ring2padding]);

  return (
    <View
      style={tw`flex-1 justify-center items-center space-y-10 bg-amber-500`}
    >
      <StatusBar style="dark" />
      <Animated.View
        style={[
          tw`bg-white/20 rounded-full bottom-10`,
          { padding: ring1padding },
        ]}
      >
        <Animated.View
          style={[tw`bg-white/20 rounded-full `, { padding: ring2padding }]}
        >
          <Image
            source={require("../../public/images/imm.png")}
            style={style.Image}
          />
        </Animated.View>
      </Animated.View>
      {/* title and punchlines */}
      <View style={tw`flex items-center`}>
        <Text
          style={[
            tw`font-bold text-white tracking-widest bottom-2`,
            { fontSize: hp(7) },
          ]}
        >
          Foody
        </Text>
        <Text
          style={[
            tw`font-bold text-white tracking-widest `,
            { fontSize: hp(2) },
          ]}
        >
          Foody is always right
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f59e0b",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    backgroundColor: "#FFFFFF33",
    borderRadius: 100,
    padding: 20,
  },
  view2: {
    backgroundColor: "#FFFFFF33",
    borderRadius: 100,
    padding: 18,
  },
  Image: {
    height: hp(20),
    width: hp(20),
  },
});
