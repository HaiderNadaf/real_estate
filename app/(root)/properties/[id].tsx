import icons from "@/constants/icons";
import images from "@/constants/images";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Property extends Models.Document {
  image: string;
  rating: number;
  name: string;
  address: string;
  price: string;
}

interface Props {
  item: Property;
  onPress?: () => void;
}

const property = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaProvider>
      <ScrollView>
        <TouchableOpacity className="mt-10 overflow-hidden rounded-t-3xl">
          <Image
            source={images.japan}
            className="w-full h-[400px]"
            resizeMode="cover"
          />

          {/* ⭐ Rating Badge */}
          <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
            <Image source={icons.star} className="w-3.5 h-3.5" />
            <Text className="text-sm font-rubik-bold text-primary-300 ml-1">
              {icons.star}
            </Text>
          </View>
        </TouchableOpacity>

        <View className="px-5">
          <Text className="text-2xl font-rubik-extrabold text-black-300 mt-4">
            Modernica Apartment
          </Text>

          <View className="flex flex-row items-center gap-3 mt-3">
            {/* Apartment Tag */}
            <View className="bg-primary-100 rounded-xl px-3 py-1">
              <Text className="text-primary-300 text-sm font-rubik-bold">
                APARTMENT
              </Text>
            </View>

            {/* Rating */}
            <View className="flex flex-row items-center">
              <Image source={icons.star} className="w-3.5 h-3.5 mr-1" />
              <Text className="text-sm font-rubik-bold text-primary-300">
                4.8 (567 reviews)
              </Text>
            </View>
          </View>

          <View className="mt-5 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
                <Image
                  source={icons.bed}
                  className="w-5 h-5 text-primary-300"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-base font-rubik text-black-200">
                8 Beds
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
                <Image
                  source={icons.bath}
                  className="w-5 h-5 text-primary-300"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-base font-rubik text-black-200">
                3 bath
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
                <Image
                  source={icons.area}
                  className="w-5 h-5 text-primary-300"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-base font-rubik text-black-200">
                8 Beds
              </Text>
            </View>
          </View>
        </View>

        <View className="h-[1] mx-4 my-3 bg-gray-300" />

        <View className="px-5 mb-5">
          <View>
            <Text className="text-2xl font-rubik-extrabold text-black-300 mb-3">
              Agent
            </Text>

            <View className="flex-row justify-between items-center">
              <View className="flex-row  justify-between items-center mt-2">
                <Image
                  source={images.avatar}
                  className="w-12 h-12 rounded-full"
                />
                <View className="ml-3">
                  <Text className="font-rubik-extrabold">Haider Nadaf</Text>
                  <Text>owner</Text>
                </View>
              </View>

              <View className="flex-row gap-4">
                <Image source={icons.chat} className="w-8 h-8" />
                <Image source={icons.phone} className="w-8 h-8" />
              </View>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-2xl font-rubik-extrabold text-black-300 mb-3">
              Overview
            </Text>
            <Text className="text-base text-gray-600 leading-relaxed">
              Spacious modern apartment located in the heart of the city with
              stunning views. Features 8 bedrooms, 3 bathrooms, and a fully
              equipped kitchen. Enjoy amenities such as a gym, pool, and 24/7
              security. Perfect for families or groups seeking comfort and
              convenience.
            </Text>
          </View>

          <View className="mt-8">
            <Text className="text-2xl font-rubik-extrabold text-black-300 mb-3">
              Facilities
            </Text>

            <View className="flex flex-row flex-wrap">
              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image
                    source={icons.carPark}
                    className="w-8 h-8 rounded-2xl"
                  />
                </View>
                <Text className="text-black text-sm">Car Parking</Text>
              </View>

              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image source={icons.swim} className="w-8 h-8 rounded-2xl" />
                </View>
                <Text className="text-black text-sm">Swimming</Text>
              </View>

              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image
                    source={icons.dumbell}
                    className="w-8 h-8 rounded-2xl"
                  />
                </View>
                <Text className="text-black text-sm">Gym</Text>
              </View>

              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image
                    source={icons.cutlery}
                    className="w-8 h-8 rounded-2xl"
                  />
                </View>
                <Text className="text-black text-sm">Restaurant</Text>
              </View>

              {/* This one will now go to the next row */}
              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image source={icons.wifi} className="w-8 h-8 rounded-2xl" />
                </View>
                <Text className="text-black text-sm">Wifi</Text>
              </View>

              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image source={icons.dog} className="w-8 h-8 rounded-2xl" />
                </View>
                <Text className="text-black text-sm">Pet-Center</Text>
              </View>
              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image source={icons.run} className="w-8 h-8 rounded-2xl" />
                </View>
                <Text className="text-black text-sm">Sport Center</Text>
              </View>
              <View className="w-1/4 mb-4 items-center">
                <View className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Image
                    source={icons.laundry}
                    className="w-8 h-8 rounded-2xl"
                  />
                </View>
                <Text className="text-black text-sm">Laundry</Text>
              </View>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-2xl font-rubik-extrabold text-black-300 mb-3">
              Gallery
            </Text>

            <View className="flex-row gap-6">
              <View>
                <Image
                  source={images.japan}
                  className="w-28 h-28 rounded-2xl mb-3"
                />
              </View>
              <View>
                <Image
                  source={images.newYork}
                  className="w-28 h-28 rounded-2xl mb-3"
                />
              </View>
              <View>
                <Image
                  source={images.japan}
                  className="w-28 h-28 rounded-2xl mb-3"
                />
              </View>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-2xl font-rubik-extrabold text-black-300 mb-3">
              Location
            </Text>
            <View className="flex-row gap-3">
              <Image source={icons.location} className="w-5 h-5 mt-2" />
              <Text className="text-base font-rubik text-black-200 mt-2">
                Bengaluru , Karnataka, India
              </Text>
            </View>

            <Image
              source={images.map}
              className="w-full h-56 rounded-2xl mb-3 mt-3"
            />

            <View className="flex flex-row  mt-7 justify-between ">
              <View className="flex flex-row">
                <Image source={icons.star} className="w-7 h-7 mr-1" />
                <Text className="text-xl mx-1 font-rubik-bold  text-black">
                  4.8 (567 reviews)
                </Text>
              </View>
              <Text className="text-xl  font-rubik-bold text-primary-300 ml-4">
                see all
              </Text>
            </View>

            <View className="mt-10">
              <View className="flex flex-row gap-3">
                <Image source={images.avatar} className="w-10 h-10" />
                <Text className="text-xl font-rubik-bold text-black-200 mt-2">
                  Haider Nadaf
                </Text>
              </View>
              <Text className="text-base text-gray-600 leading-relaxed mt-2">
                Spacious modern apartment located in the heart of the city with
                stunning views. Features 8 bedrooms, 3 bathrooms, and a fully
                equipped kitchen.
              </Text>

              <View className="flex flex-row justify-between mt-4">
                <View className="flex flex-row gap-2 ">
                  <Image
                    source={icons.heart}
                    className="w-8 h-8 text-primary-300"
                  />
                  <Text>765</Text>
                </View>
                <Text className="text-gray-400">6 days ago</Text>
              </View>
            </View>
          </View>

          <View className="h-[1]  my-3 bg-gray-300" />

          <View className="mb-10 flex flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-rubik-bold text-gray-600 mb-3">
                Price
              </Text>
              <Text className="text-3xl font-rubik-extrabold text-primary-300">
                $2,5000
              </Text>
            </View>

            <View>
              <TouchableOpacity className="bg-primary-300 w-56 rounded-3xl px-5 py-3 mt-6 items-center">
                <Text className="text-white text-lg font-rubik-bold">
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default property;
