import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants';
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { Trending } from "../components/trending";


const statusBarHeight = Constants.statusBarHeight; /** Estou criando isso para deixar o icone de menu adaptavel nas telas sem precisar ficar colocando margin */

export default function Index() {
  return (
    <ScrollView style={{ flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false} >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }} >
        <Header />
        <Banner />
        <Search />
      </View>
      <Section 
        name= "Comidas em alta"
        label= "Veja mais" 
        action={ () => console.log("Clicou em ver mais") }
        size="text-2xl"
      />
      
      <Trending />
    </ScrollView>
  );
}