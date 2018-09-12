import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types';

class ToDoItemComponent extends React.Component {
    state = { isChecked: false }

    render() {
        return (
            <View style={styles.paper}>
                <Text style={styles.title}>{this.props.title}</Text>
                <CheckBox checked={this.state.isChecked} onPress={() => { this._pressCheckBox() }}></CheckBox>
                <Text style={styles.subText}>{this.props.subText}</Text>
            </View>
        )
    }
    _pressCheckBox() {
        
        this.setState({ isChecked: !this.state.isChecked })
    }
}

ToDoItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
    // isChecked: PropTypes.bool.isRequired
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
        fontSize: 16
    }
})

export default ToDoItemComponent