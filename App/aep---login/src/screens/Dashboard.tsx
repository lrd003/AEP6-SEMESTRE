import React, { useState } from 'react';
import Header from '../components/Header';
//import Button from '../components/Button';
import { Navigation } from '../types';
import { View, StyleSheet, Picker, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import SelecCalc from '../components/SelecCalc';
import Background from '../components/Background';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <KeyboardAvoidingView behavior="padding">
    <View style={styles.p5}>
      <View style={styles.row}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Dashboard')}>
          Cálculos
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('List')}>
          Relatórios
        </Button>
      </View>
      <Background>
        <View>
          <Header>Calculo da necessidade de Calcário</Header>
          <SelecCalc ></SelecCalc>
        </View>
      </Background>
    </View>
  </KeyboardAvoidingView>
);

export default Dashboard;

const styles = StyleSheet.create({
  p5: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignSelf: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
