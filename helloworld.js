import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('http://100.108.182.44:5000/data', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log("result new 1"+JSON.stringify(responseJson[0]) );
         this.setState({
            data: responseJson[0]
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.hellocol}
            </Text>
         </View>
      )
   }
}
export default HttpExample