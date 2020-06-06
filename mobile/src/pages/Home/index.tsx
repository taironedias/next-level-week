import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather  as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface PickerSelect {
  label: string;
  value: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const [ufsList, setUfsList] = useState<PickerSelect[]>([]);
  const [citiesList, setCitiesList] = useState<PickerSelect[]>([]);

  useEffect(() => {
    const urlIBGEUf = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
    axios.get<IBGEUFResponse[]>(urlIBGEUf).then(response => {
      const ufInitials = response.data.map(uf => { 
        return {
          label: uf.sigla,
          value: uf.sigla
        };
      });

      setUfsList(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (uf === '0') {
      return;
    }

    const urlIBGECity = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
    axios.get<IBGECityResponse[]>(urlIBGECity).then(response => {
      const cityInitials = response.data.map(city => { 
        return {
          label: city.nome,
          value: city.nome
        };
      });

      setCitiesList(cityInitials);
    })

  }, [uf]);

  function handleNavigationToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    });
  }

  function hanldeSelectedUf(uf: string) {
    setUf(uf);
    setCity('');
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
          <View style={styles.main}>
            <Image source={require('../../assets/logo.png')} />
            <View>
              <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>
          </View>

          <View style={styles.footer}>
            {/* <TextInput 
              style={styles.input}
              placeholder='Digite a UF'
              value={uf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
              onChangeText={text => setUf(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Digite a cidade'
              value={city}
              autoCorrect={false}
              onChangeText={setCity}
            /> */}
            <RNPickerSelect
              placeholder={{
                label: 'Selecione uma UF',
                value: null,
                color: '#9EA0A4',
              }}
              onValueChange={value => hanldeSelectedUf(value)}
              items={ufsList}
              value={uf}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <Icon name="arrow-down" size={24} color="#C9C9C9" style={{top: 20, right: 10}} />;
              }}
            />
            <RNPickerSelect
              placeholder={{
                label: 'Selecione uma cidade',
                value: null,
                color: '#9EA0A4',
              }}
              onValueChange={value => setCity(value)}
              items={citiesList}
              style={pickerStyle}
              value={city}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <Icon name="arrow-down" size={24} color="#C9C9C9" style={{top: 20, right: 10}} />;
              }}
            />

            <RectButton style={styles.button} onPress={handleNavigationToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name='arrow-right' color='#FFF' size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>
                Entrar
              </Text>
            </RectButton>
          </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const pickerStyle = {
	inputAndroid: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;