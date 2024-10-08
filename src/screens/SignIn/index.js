import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import { auth, db } from  './../../../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function SignIn(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        if (email === '' || password === '') {
          Alert.alert('Erro', 'Preencha todos os campos');
          return;
        }
    
        setLoading(true);
    
        try {
          await auth().signInWithEmailAndPassword(email, password);
          Alert.alert('Sucesso', 'Login realizado com sucesso');
          // Navegar para a próxima tela ou dashboard
          navigation.replace('HomeScreen');
        } catch (error) {
          console.error(error);
          if (error.code === 'auth/user-not-found') {
            Alert.alert('Erro', 'Usuário não encontrado');
          } else if (error.code === 'auth/wrong-password') {
            Alert.alert('Erro', 'Senha incorreta');
          } else {
            Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
          }
        } finally {
          setLoading(false);
        }
      };
   
  
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>    
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                />

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={ () => navigation.navigate('SignUp')} style={styles.buttonRegister} >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1',
    }
});
