import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry, ListView, TextInput, StyleSheet, Text, View, Image} from 'react-native';
import api from './api.js';

class ListScreen extends Component {
    static navigationOptions = {
        title: 'Movie Explorer'
      };
  constructor(props) {
   super(props);
   const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2}
   );
   this.state = {
     dataSource: ds.cloneWithRows([]),
   };
   
  }
  searchMovie(text){
    api.search(text).then((data)=>{
        this.setState({dataSource: data});       
   });
  }
  render() {
    console.log(this.state.dataSource);
    return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type movie name" onChangeText={key => this.setState({key})}/>
      <TouchableOpacity style={styles.button} onPress= {()=>{this.searchMovie(this.state.key)}}>
        <Text>Search</Text>
      </TouchableOpacity>
      <ListView style={styles.list}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) => {
          console.log('rowData', rowData);
          return (
            <TouchableOpacity onPress={()=> this.props.navigator.push({index: 1,
               passProps:{imdbID: rowData.imdbID}})}>
              <View style={styles.row}>
                  <View style={{flex:3}}>
                    <Image style={styles.image} source={{uri: rowData.Poster}}/>
                  </View>
                  <View style={{flex:10, padding: 10}}>
                    <Text style={styles.title}>{rowData.Title} ({rowData.Year})</Text>
                  </View>
                  <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={styles.title}>></Text>
                  </View>
              </View>
            </TouchableOpacity>
          )
        }

        }
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View key={rowID} style={{height:1, backgroundColor: 'lightgray'}}/>
        }
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    //paddingTop:65,
    flex:1
  },
  list: {
    paddingTop: 20
  },
  row:{
    flexDirection: 'row',
    height: 100
  },
  image:{
    height: 100
  },
  title:{
    fontSize: 20
  },
  input: {
    padding: 10,
    height: 50,
    fontSize: 20
  },
  button:{
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10, 
    marginTop: 10,   
    borderRadius: 10,
    backgroundColor: 'grey'
  }
});

export default ListScreen;