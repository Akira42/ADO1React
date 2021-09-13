import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';

const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text style={styles.info}>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,affiliation,link}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={affiliation}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
                {
            "id": 7,
            "first_name": "Arcade",
            "last_name": "Gannon",
            "affiliation": "Followers of the Apocalypse",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/1/12/Arcade_Gannon.jpg"
        },
        {
            "id": 8,
            "first_name": "Craig",
            "last_name": "Boone",
            "affiliation": "NCR 1st Recon",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/3/3b/Craig_Boone.jpg"
        },
        {
            "id": 9,
            "first_name": "Lily",
            "last_name": "Bowen",
            "affiliation": "Jacobstown",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/5/5e/Lily.jpg"
        },
        {
            "id": 10,
            "first_name": "Raul",
            "last_name": "Tejada",
            "affiliation": "None",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/e/ef/Raul_Tejada.jpg"
        },
        {
            "id": 11,
            "first_name": "Rose of Sharon Cassidy",
            "last_name": "'Cass'",
            "affiliation": "Cassidy Caravans",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/d/da/Rose_of_Sharon_Cassidy.jpg"
        },
        {
            "id": 12,
            "first_name": "Veronica",
            "last_name": "Santangelo",
            "affiliation": "Brotherhood of Steel",
            "avatar": "https://static.wikia.nocookie.net/fallout/images/f/fa/Veronica_Santangelo.jpg"
        },
    ];

export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              affiliation={item.affiliation}
      />
    )
  }

  return (

    <View style={styles.container}>

      <FlatList 
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#121212',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e3e3e3',
    backgroundColor: '#CA4D4A'
  },
  tinyLogo: {
    margin: 12,
    padding: 12,
    width: 75,
    height: 75,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2f2f2f",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    color: '#cfcfcf',
  },
});