import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

import { Sheet } from "../../component/Sheet"

import { styles } from "./styles"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  const [sheetIsOpen, setSheetIsOpen] = useState(false)

  function handleToggleSheet() {
    setSheetIsOpen((prevState) => !prevState)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleToggleSheet}
      >
        <Ionicons name="options" size={24} color="#FFF" />
      </TouchableOpacity>

      {sheetIsOpen && <Sheet onClose={handleToggleSheet} />}
    </View>
  )
}
