import React from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, 
    ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform} from 'react-native'

function ApplAYOUT(){

    return(
        <ImageBackground source={require('./assets/backGround.png')} style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Image source={require('./assets/logo.png')} 
                style={styles.logo}></Image>
            </View>
          </View>
          
          <View style={styles.body}>
            <TouchableOpacity>            
              <Text style={styles.textColor}>{saludo} Usuario # {user}</Text>
              <TextInput placeholder="Nombre de usuario" placeholderTextColor="white"
              maxLength={20} style={{ borderWidth : 1, borderColor : "white", 
              padding : 5, marginTop : 10}}
              >
              </TextInput>
              <TextInput placeholder="Contraseña" placeholderTextColor="white"
              maxLength={20} style={{ borderWidth : 1, borderColor : "white", 
              padding : 5, marginTop : 10}}
              >
              </TextInput>
              <TextInput placeholder="Usario: " 
                  onChangeText = { (userName) => this.setState({ userName }) }
              ></TextInput>
              <Button title="Login" color="#046582" onPress={this.login}></Button>
              <Button title="Iniciar Sesión" onPress={this.sumarUsuario}></Button>
              <Button title="Registrarme" onPress={this.sumarUsuario}></Button>
          </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={[styles.flex, styles.footerLeft]}>
                <Text style={styles.textColor}>Catálogo</Text>
            </View>
            <View style={[styles.flex, styles.footerCenter]}>
                <Text style={styles.textColor}>Políticas de privacidad</Text>
            </View>
            <View style={[styles.flex, styles.footerRight]}>
                <Image source={require('./assets/avatar.png')} 
                style={styles.logo}></Image>
            </View>
          </View>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      flexDirection : 'column',
      backgroundColor : '#289672'
    },
    negrita : {
      fontWeight : 'bold'
    },
    header : {
      flex : 0.5,
      flexDirection : 'row',
      marginTop : 60
    },
    headerLeft : {
      flex : 1,
      marginTop : 60
    },
    headerRight : {
      flex : 1,
      marginTop : 10
    },
    body : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    },
    logo : {
      width : 100,
      height : 100,
      borderRadius : 15,
      resizeMode : 'contain'
    },
    footer : {
      flex : 1,
      flexDirection : 'row'
    },
    flex : {
      flex : 1
    },
    footerLeft : {
      alignItems : 'flex-end',
      justifyContent : 'center'
    },
    footerRight : {
      alignItems : 'flex-end',
      justifyContent : 'center'
    },
    textColor : {
      color : 'white'
    }
  })
  
  export default HolaMundo

export default AppLoyout