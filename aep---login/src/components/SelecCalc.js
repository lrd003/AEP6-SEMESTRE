import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import CalculoNC from './CalculoNC';
import CalculoQC from './CalculoQC'

const SelecCalc = () => {
  const [selectedValue, setSelectedValue] = useState('NC');
  
  function Calculo(props) {
    if (props === 'QC') {
      return <CalculoQC/>;
    }
    return <CalculoNC/>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="NC" value="NC" />
        <Picker.Item label="QC" value="QC" />
      </Picker>

      <View>{Calculo(selectedValue)}</View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelecCalc;
