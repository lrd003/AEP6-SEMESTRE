import React, { useEffect, useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import axios from 'axios';
import { Button, Divider, Card } from 'react-native-paper';
import { Navigation } from '../types';
import Background from '../components/Background';
import { links } from '../core/utils';

type Props = {
  navigation: Navigation;
};

const List = ({ navigation }: Props) => {
  const [userList, setUserList] = useState([]);

  const [selectedValue, setSelectedValue] = useState('NC');

  function listaCalculo(props) {
    setSelectedValue(props);
    getUsers(props);
  }

  const getUsers = (calc) => {
    axios
      .get(links.api + calc)
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (idUser = '') => {
    axios
      .delete(links.api + selectedValue + '/' + idUser)
      .then((response) => {
        getUsers(selectedValue);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers('NC');
  }, []);

  return (
    <View>
      <View style={styles.row}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Dashboard')}>
          Cálculos
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('List')}>
          Relatórios
        </Button>
      </View>
      <Background>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => listaCalculo(itemValue)}>
          <Picker.Item label="NC" value="NC" />
          <Picker.Item label="QC" value="QC" />
        </Picker>
        
        
        {userList.map((element) => {
          if (selectedValue === 'NC') {
            return (
              <Card style={styles.card}>
                <Text>T = {element.apiT}</Text>
                <Text>VE = {element.apiVe}</Text>
                <Text>VA = {element.apiVa}</Text>
                <Text>Resultado = {element.apiResult}</Text>
                <Button
                  mode="contained"
                  style={styles.deletar}
                  onPress={() => deleteUser(element._id)}>
                  Deletar cálculo
                </Button>
              </Card>
            );
          } else {
            return (
              <Card style={styles.card}>
                <Text>Nc = {element.apiNc}</Text>
                <Text>Sc = {element.apiSc}</Text>
                <Text>Pf = {element.apiPf}</Text>
                <Text>Prnt = {element.apiPrnt}</Text>
                <Text>Resultado = {element.apiResult}</Text>
                <Button
                  mode="contained"
                  style={styles.deletar}
                  onPress={() => deleteUser(element._id)}>
                  Deletar cálculo
                </Button>
              </Card>
            );
          }
        })}
      </Background>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignSelf: 'center',
  },
  deletar: {
    backgroundColor: 'red',
    marginTop: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});
