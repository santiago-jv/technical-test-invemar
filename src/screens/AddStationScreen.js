import React from 'react';
import {
	Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const AddStationScreen = () => {
  const onChangeData = text => {};
  return (
    <View style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.title}>Insert the stations data</Text>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Place</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={onChangeData}
              keyboardType={'default'}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Latitude</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={onChangeData}
              keyboardType={'numeric'}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Longitude</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={onChangeData}
              keyboardType={'numeric'}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text style={styles.textButton}>ADD STATION</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formGroup: {
    marginVertical: 10,
  },
  formLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  formInput: {
    borderColor: 'rgb(15,130,255)',
    borderWidth: 3,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: 'rgb(15,130,255)',
    width: 140,

    paddingVertical: 10,
  },
  textButton: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddStationScreen;
