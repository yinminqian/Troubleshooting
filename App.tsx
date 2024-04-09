import { Text, SafeAreaView } from "react-native";
import { Gesture, GestureDetector, FlatList,GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";


const data = new Array(50).fill("1");
 const App = () => {
  return <GestureHandlerRootView style={{flex:1}}>
   <SafeAreaView style={{ flex: 1 }}>
    <FlatList data={data}
              style={{ flex: 1 }}
              renderItem={({ item, index }) => <ItemTap index={index} />}
    />
  </SafeAreaView>
  </GestureHandlerRootView>
};
const ItemTap = ({  index }) => {

  const scale = useSharedValue(1);
  const gesture = Gesture.LongPress()
    .maxDistance(1)
    .minDuration(1000 * 60 * 30)
    .onBegin((e) => {
      "worklet";
      scale.value = withTiming(0.95, {
        duration: 300,
        easing: Easing.inOut(Easing.quad),
      });
    })
    .onEnd((e) => {
      console.log("onEnd==>", e);
    })
    .onFinalize((e) => {
      "worklet";
      scale.value = withTiming(1, {
        duration: 100,
        easing: Easing.inOut(Easing.quad),
      });
    });
  return <GestureDetector gesture={gesture}>
    <Animated.View style={{
      height: 200,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "red",
      marginBottom: 20,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      transform: [{ scale }],
    }}>
      <Text>{index}</Text>
    </Animated.View>
  </GestureDetector>;
};

export default App;