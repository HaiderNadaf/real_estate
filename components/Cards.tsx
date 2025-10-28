import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image } from "react-native";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeatureCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="w-full h-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="w-full h-full rounded-2xl absolute bottom-0"
      />

      {/* ⭐ Rating Badge */}
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="w-3.5 h-3.5" />
        <Text className="text-sm font-rubik-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>

      {/* 🏠 Info Section */}
      <View className="flex flex-col absolute bottom-5 left-5 right-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-white mb-2">
          99 w 14st, Bengaluru
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            $3,600
          </Text>
          <Image source={icons.heart} className="w-5 h-5" tintColor="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 py-3 rounded-lg bg-white shadow-lg shadow-black/20 relative"
    >
      {/* ⭐ Rating Badge */}
      <View className="flex flex-row items-center absolute top-3 right-3 bg-white/90 rounded-full px-2 py-0.5 z-50">
        <Image source={icons.star} className="w-3 h-3" />
        <Text className="text-sm font-rubik-bold text-primary-300 ml-0.5">
          4.4
        </Text>
      </View>

      <Image source={images.japan} className="w-full h-40 rounded-lg" />

      <View className="mt-3 px-3">
        <Text className="text-base font-rubik-extrabold text-black">
          Cozy Studio
        </Text>
        <Text className="text-xs font-rubik text-gray-500">
          99 w 14st, Bengaluru
        </Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-extrabold text-primary-300">
            $3,600
          </Text>
          <Image source={icons.heart} className="w-5 h-5" tintColor="#191d31" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
