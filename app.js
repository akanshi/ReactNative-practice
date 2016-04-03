'use strict';

var react = require('react-native');
var Home = require('./home.ios');
var Profile = require('./profile.ios');

var {
	Component,
	TabBarIOS,
	View,
	Text,
	Stylesheet
} = React;

class app extends Component(){
	constructor(props){
		super(props);
		this.state={
			selectedTab:'home'
		};
		
		<TabBarIOS selectedTab=this.state.selectedTab>
		
		<TabBarIOS.Item
		selected={this.state.selectedTab==='Home'}
		icon={{uri:'Home'}}
		onPress={()=> {
			this.setState({
				selectedTab:'home'
				});
				}}>
		<Home />
		</TabBarIOS.Item>
		
		<TabBarIOS.Item
		selected={this.state.selectedTab==='Profile'}
		icon={{uri:'Profile'}}
		onPress={()=> {
			this.setState({
				selectedTab:'profile'
				});
				}}>
		<Profile />
		</TabBarIOS.Item>
		
		</TabBarIOS>
	}
	render(){
		return(
		)
	}
};

AppRegistery.registerComponet('app',()=> app);
