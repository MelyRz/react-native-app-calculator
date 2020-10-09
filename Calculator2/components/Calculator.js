import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
    TextInput,
  } from 'react-native';
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: '',
            second: '',
            total: 0,
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    calculateSum = () => {
      const { first, second } = this.state;
    
      this.setState({
        total: Number(first) + Number(second)
      });
    }

    calculateDiff = () => {
      const { first, second } = this.state;
    
      this.setState({
        total: Number(first) - Number(second)
      });
    }

    calculateProd = () => {
      const { first, second } = this.state;
    
      this.setState({
        total: Number(first) * Number(second)
      });
    }

    calculateQuo = () => {
      const { first, second } = this.state;
    
      this.setState({
        total: Number(first) / Number(second)
      });
    }

    insert7 = () => {
      this.setState({
        first: this.state.first + '7',
      });
    }

      render(){
          return(
            <View>
            <TextInput id='calc' numeric style={styles.sectionTitle} value={this.state.first} placeholder='0' keyboardType={'numeric'} onChangeText={(first) => this.setState({first})}/>
            <TextInput id='calc2' numeric style={styles.sectionTitle} value={this.state.second} placeholder='0' keyboardType={'numeric'} onChangeText={(second) => this.setState({second})}/>
            <Text>{`Total ${this.state.total}`}</Text>
            
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}><Button title="/" style={styles.fixToText} onPress={this.calculateQuo}/></View>
                <View style={{flexDirection: 'column'}}><Button title="*" style={styles.fixToText} onPress={this.calculateProd}/></View>
                <View style={{flexDirection: 'column'}}><Button title="-" style={styles.fixToText} onPress={this.calculateDiff}/></View>
                <View style={{flexDirection: 'column'}}><Button title="+" style={styles.fixToText} onPress={this.calculateSum}/></View>
              </View>
            
          </View>
          );
      }
  }

  /*
  <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}><Button title="7" value="7" style={() => this.insert7}/></View>
                <View style={{flexDirection: 'row'}}><Button title="4" style={styles.fixToText} onPress={() => Alert.alert('4')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="1" style={styles.fixToText} onPress={() => Alert.alert('1')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="0" style={styles.fixToText} onPress={() => Alert.alert('0')}/></View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}><Button title="8" style={styles.fixToText} onPress={() => Alert.alert('8')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="5" style={styles.fixToText} onPress={() => Alert.alert('5')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="2" style={styles.fixToText} onPress={() => Alert.alert('2')}/></View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}><Button title="9" style={styles.fixToText} onPress={() => Alert.alert('9')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="6" style={styles.fixToText} onPress={() => Alert.alert('6')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="3" style={styles.fixToText} onPress={() => Alert.alert('3')}/></View>
                <View style={{flexDirection: 'row'}}><Button title="=" style={styles.fixToText} onPress={() => Alert.alert("=")}/></View>
              </View>
  */

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  export default(Calculator);