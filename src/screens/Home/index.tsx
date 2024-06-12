import { useState } from "react"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { View, TouchableOpacity, ImageBackground } from "react-native"

import { Sheet } from "../../component/Sheet"

import background from "../../assets/bg.jpg"

import { styles } from "./styles"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  const [sheetIsOpen, setSheetIsOpen] = useState(false)

  function handleToggleSheet() {
    setSheetIsOpen((prevState) => !prevState)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="contain"
        style={styles.bgImg}
      >
        {sheetIsOpen && (
          <Animated.View
            style={styles.blur}
            entering={FadeIn}
            exiting={FadeOut}
          >
            <BlurView style={styles.blur} intensity={50} />
          </Animated.View>
        )}

        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.7)",
            "rgba(0, 0, 0, 0.4)",
            "rgba(0, 0, 0, 0.5)",
          ]}
          locations={[0.3, 0.6, 0.7]}
          style={styles.gradient}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleToggleSheet}
        >
          <Ionicons name="options" size={24} color="#FFF" />
        </TouchableOpacity>

        {sheetIsOpen && <Sheet onClose={handleToggleSheet} />}
      </ImageBackground>
    </View>
  )
}
