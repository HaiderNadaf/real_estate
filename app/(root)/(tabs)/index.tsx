import { Card, FeatureCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => <Card />}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  // source={images.avatar}
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start justify-center ml-2">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between ">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Feature
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-black-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3]}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => <FeatureCard />}
              />
              <Filters />
            </View>

            <View className="flex flex-row items-center justify-between ">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-black-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
