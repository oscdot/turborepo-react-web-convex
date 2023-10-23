import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { api, useQuery } from "@flimmer/db";

export default function TabOneScreen() {
  const tasks = useQuery(api.tasks["getTasks"], {});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      {tasks?.map((task) => (
        <Text key={task._id}>{task.text}</Text>
      ))}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
