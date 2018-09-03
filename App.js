import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class Botao extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius: 25
      },
      btnArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnText:{
        color: props.color,
        fontSize:14,
        fontWeight: 'bold'
      }
    })
  }

  render(){
    return(
      <TouchableOpacity style={ this.styles.botao } onPress={this.props.onPress}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class LuckyCracker extends Component{

  constructor(props){
    super(props)
    this.state = {frase: 'Frase do dia...'}

    this.frases = [
      'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.',
      'A gente todos os dias arruma os cabelos: por que não o coração?',
      'Cem homens podem formar um acampamento, mas é preciso uma mulher para se fazer um lar.',
      'Se não queres que ninguém saiba, não o faças.',
      'Escolher o seu tempo é ganhar tempo.',
      'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
      'É melhor conquistar a si mesmo do que vencer mil batalhas.',
      'Enquanto houver vontade de lutar haverá esperança de vencer.',
      'O medo de perder tira a vontade de ganhar.',
      'Arriscamo-nos a perder quando queremos ganhar demais.'
    ]
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }
  
  quebrarBiscoito(){
    let s = this.state
    let r = Math.floor(Math.random() * this.frases.length)

    s.frase = this.frases[r];
    
    this.setState(s)
  }

  render(){
    return(
      <View style={ styles.body }>
        <Image source={require('./images/cookie.png')}/>

        <Text style={styles.texto}>"{ this.state.frase }"</Text>
        <Botao color='#B59619' text='Quebrar Biscoito' onPress={this.quebrarBiscoito}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto:{
    fontSize: 17,
    color:'#B59619',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center'
  }
})