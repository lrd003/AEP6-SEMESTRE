import React, { useState } from 'react';
import { TextInput, Snackbar } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';
import axios from 'axios';
import Button from '../components/Button';

const api = 'https://crudcrud.com/api/0fb57ce01bf94baca8208a6d3cbaea19/';
  
const CalculoNC = () => {
  const [inputT, setT] = useState('');
  const [inputVe, setVe] = useState('');
  const [inputVa, setVa] = useState('');

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const calculo = () => {
    
    if (inputT != '' && inputVa != '' && inputVe != '') {
      var temp = (inputT * (inputVe - inputVa)) / 100;
      post(temp);      
    }
  };

  const post = (apiResultParam) => {
    axios
      .post(api + 'NC', {
        apiT: inputT,
        apiVe: inputVe,
        apiVa: inputVa,
        apiResult: apiResultParam,
      })
      .then(() => {
        setVisible(!visible);
      })
      .catch(() => {
        console.log('nao deu');
      });
  };

  return (
    <View style={styles.spaceBetween}>
      <View>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            label="T"
            value={inputT}
            onChangeText={(inputT) => setT(inputT)}
          />

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            label="Ve"
            value={inputVe}
            onChangeText={(inputVe) => setVe(inputVe)}
          />

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            label="Va"
            value={inputVa}
            onChangeText={(inputVa) => setVa(inputVa)}
          />

          <TextInput disabled style={styles.textInput} value="100" />
        </View>

        <View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => calculo()}>
            Calcular NC
          </Button>
        </View>
      </View>

      <Snackbar
        visible={visible}
        duration={2000}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {},
        }}>
        Calculo realizado com sucesso.
      </Snackbar>
    </View>
  );
};

export default CalculoNC;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    marginTop: 10,
    width: 60,
    height: 60,
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
