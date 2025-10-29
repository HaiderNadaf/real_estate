import { Card, FeatureCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  // ✅ Fetch latest properties
  const { data: latestProperties, loading: latestLoading } = useAppwrite<any[]>(
    {
      fn: getLatestProperties,
      params: {},
      skip: false,
    }
  );

  // ✅ Fetch filtered properties
  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  // ✅ Refetch whenever filters or query change
  useEffect(() => {
    refetch({
      filter: params.filter || "All",
      query: params.query || "",
      limit: 6,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={latestProperties}
        keyExtractor={(item, index) => item?.$id || index.toString()}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={
          <View className="px-5">
            {/* 👤 Header with avatar */}
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
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

            {/* 🔍 Search Bar */}
            <Search />

            {/* 🌟 Feature Section */}
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Feature
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-black-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              {latestLoading ? (
                <ActivityIndicator
                  className="text-primary-300 mt-5"
                  size="large"
                />
              ) : !latestProperties || latestProperties.length === 0 ? (
                <NoResults />
              ) : (
                <>
                  <FlatList
                    data={latestProperties}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerClassName="flex gap-5 mt-5"
                    keyExtractor={(item) => item.$id}
                    renderItem={({ item }) => (
                      <FeatureCard
                        item={item}
                        onPress={() => handleCardPress(item.$id)}
                      />
                    )}
                  />
                  <Filters />
                </>
              )}
            </View>

            {/* 💡 Recommendation Section */}
            <View className="flex flex-row items-center justify-between mb-3">
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
