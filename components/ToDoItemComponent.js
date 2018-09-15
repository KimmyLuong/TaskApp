import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import PropTypes from 'prop-types';

class ToDoItemComponent extends React.Component {
    state = { isChecked: false }

    render() {
        return (
            <View style={styles.paper}>
                <Button
                    title="Delete"
                    onPress={() => this.props.onDeleteTodo(this.props.id)} />
                <Text style={styles.title}>{this.props.title}</Text>
                <CheckBox
                    checked={this.props.complete}
                    onPress={() => this.props.onToggleTodo(this.props.id)} />
                <Text style={styles.subText}>{this.props.subText}</Text>
            </View>
        )
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
        margin: 10,
        flex: 1
    },
    title: {
        fontSize: 40
    },
    subText: {
        fontSize: 16
    }
})

export default ToDoItemComponent