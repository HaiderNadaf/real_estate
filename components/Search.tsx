import icons from "@/constants/icons";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const router = useRouter(); // <-- you need this to use setParams
  const params = useLocalSearchParams<{ query: string }>();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text }); // ✅ Correct syntax
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex flex-1 flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
