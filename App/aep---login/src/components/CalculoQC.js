import React, { useState } from 'react';
import { TextInput,Snackbar } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';
import axios from 'axios';

const api = 'https://crudcrud.com/api/0fb57ce01bf94baca8208a6d3cbaea19/';

const CalculoNC = () => {
  const [nc, setNc] = useState('');
  const [sc, setSc] = useState('');
  const [pf, setPf] = useState('');
  const [prnt, setPrnt] = useState('');

 
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const calculo = () => {
    
    if (nc != '' && sc != '' && pf != ''&& prnt != '') {
      var temp = (nc * (sc/100) * (pf/20) * (100/prnt));
      post(temp);      
    }
  };

  const post = (apiResultParam) => {
    axios
      .post(api + 'QC', {
        apiNc: nc,
        apiSc: sc,
        apiPf: pf,
        apiPrnt: prnt,
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
            keyboardType="numeric"
            style={styles.textInput}
            label="NC"
            value={nc}
            onChangeText={(nc) => setNc(nc)}
          />

          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            label="SC %"
            value={sc}
            onChangeText={(sc) => setSc(sc)}
          />

          <TextInput disabled style={styles.textInput} value="100" />

        </View>
        <View style={styles.row}>

          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            label="PF (cm)"
            value={pf}
            onChangeText={(pf) => setPf(pf)}
          />
          <TextInput disabled style={styles.textInput} value="20" />
          <TextInput disabled style={styles.textInput} value="100" />

        </View>
        <View style={styles.row}>

          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            label="PRNT %"
            value={prnt}
            onChangeText={(prnt) => setPrnt(prnt)}
          />

        </View>
      </View>

      <View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => calculo()}>
          Calcular QC
        </Button>
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
    width: 90,
    height: 55,
    fontSize: 13,
  },
  button: {
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
