'use strict';

var react = require('react-native');

var {
	Component,
	View,
	Text,
	Stylesheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	home: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  profile: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
});

class home extends Component(){
	render(){
		return(
		<View style='styles.container'>
		<Text style='styles.instructions'>
		THIS PAGE DISPLAYS WAT ZOMATO DOES.
		</Text>
		</View>
		)
	}
};
module.exports=HOME;