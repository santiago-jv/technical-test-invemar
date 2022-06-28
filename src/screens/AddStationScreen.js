import { useFormik } from 'formik';
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
import { useDispatch } from 'react-redux';
import { addStation } from '../redux/slices/stations/actions';
import * as yup from 'yup'


const isRequiredMessage = 'Field required.'
const validationSchema = yup.object({
  place:yup.string().required(isRequiredMessage),
  latitude:yup.number().min(-90).max(90).required('The latitude range must be between -90 and 90 and must be required.'),
  longitude:yup.number().min(-180).max(180).required('The longitude range must be between -180 and 180 and must be required.'),
})

const AddStationScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues:{
      place:'',
      latitude:'',
      longitude:''
    },
    validationSchema:validationSchema,
    onSubmit: (values)=> sendStation(values)
  })
  const dispatch = useDispatch()

  const sendStation = (values) => {
    dispatch(addStation(values))
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.title}>Insert the stations data</Text>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Place</Text>
            <TextInput
            value={formik.values.place}
              style={styles.formInput}
              onChangeText={(text)=>formik.setFieldValue('place',text)}
              keyboardType={'default'}
            />
            <Text style={styles.error}>{formik.errors.place}</Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Latitude</Text>
            <TextInput
              value={formik.values.latitude}
              style={styles.formInput}
              onChangeText={(text)=>formik.setFieldValue('latitude',text)}
              keyboardType={'numeric'}
            />
            <Text style={styles.error}>{formik.errors.latitude}</Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Longitude</Text>
            <TextInput
              value={formik.values.longitude}
              style={styles.formInput}
              onChangeText={(text)=>formik.setFieldValue('longitude',text)}
              keyboardType={'numeric'}
            />
            <Text style={styles.error}>{formik.errors.longitude}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={formik.handleSubmit}>
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
    marginBottom: 15,
    color: '#333',
  },
  formGroup: {
    marginVertical: 10,
  },
  formLabel: {
    fontSize: 20,
    marginBottom: 5,
    color:'#333'
  },
  formInput: {
    borderColor: 'rgb(15,130,255)',
    borderWidth: 3,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    borderRadius:5
  },
  error:{
    marginTop:3,
    color:'red'
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: 'rgb(15,130,255)',
    width: 140,
    borderRadius:5,
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
