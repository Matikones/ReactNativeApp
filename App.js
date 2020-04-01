import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

function Changetext(props) {
  const [text, setValue] = useState(true);

  return (
    <View style={styles.MainContainer}>
      <Text>
        I am {props.name}, and I am {text ? "sad" : "happy"}!
      </Text>
      <Button
        onPress={() => {
          setValue(false);
        }}
        disabled={!text}
        title={text ? "Be happy" : "Thank you!"}
      />
    </View>
  );
}

export default function Cafe() {
  return (
    <>
      <Changetext name="Mateusz" />
    </>
  );
}

const styles = StyleSheet.create(
{

MainContainer:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
}

});