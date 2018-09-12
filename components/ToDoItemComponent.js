import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'

class ToDoItemComponent extends React.Component{

    state={
        checked: false
    }

    render() {
        return(
            <View style={styles.paper}>
            
                <Text style={styles.title}>HI</Text>
                <CheckBox checked={this.state.checked} onPress={() => {this._pressCheckBox()}}></CheckBox>
                <Text style={styles.subText}>This is maybe a test but that is maybe for you decide if it is maybe a test.</Text>
            </View>
        )
    }
    _pressCheckBox(){
        console.log("I've been called")
        this.setState({checked: !this.state.checked})
    }
}


const styles = StyleSheet.create({
    paper: {
        elevation: 4,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        margin: 10
    },

    title: {
        fontSize: 40
    },

    subText: {
        fontSize: 20
    }

})

export default ToDoItemComponent