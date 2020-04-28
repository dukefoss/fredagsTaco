import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, CheckBox } from 'react-native';

export default function App() {
  const [ingredient, number] = useState([
    {name: 'kjøtt', key: '1'},
    {name: 'mais', key: '2'},
    {name: 'salat', key: '3'},
    {name: 'rømme', key: '4'},
    {name: 'tomat', key: '5'},  
    {name: 'avocado', key: '6'}, 
    {name: 'agurk', key: '7'},
    {name: 'tacolefse', key: '8'},
    {name: 'tacosaus', key: '9'},
  ]);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.checkboxContainer}>
        { ingredient.map(item => (
            <View key={item.key}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.CheckBox}
              />
              <Text style={styles.item}>{item.name} </Text>
            </View>
          ))}
          </View>
      </ScrollView>
    </View>
  );
}
/*
<CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.CheckBox}
          />
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282',
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f91',
    fontSize: 24,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
