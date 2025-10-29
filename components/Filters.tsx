import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  // ✅ Keep selectedCategory in sync with URL params
  useEffect(() => {
    if (params.filter && params.filter !== selectedCategory) {
      setSelectedCategory(params.filter);
    }
  }, [params.filter]);

  const handleCategoryPress = (category: string) => {
    // If user taps same category again → reset to All
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.push({
        pathname: "/",
        params: { filter: "All" },
      });
      return;
    }

    // Otherwise apply the new filter
    setSelectedCategory(category);
    router.push({
      pathname: "/",
      params: { filter: category },
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory === item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === item.category
                ? "text-white font-rubik-bold mt-0.5"
                : "text-black-300 font-rubik"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
