import React from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'




class TodoInputComponent extends React.Component {
    state = {
        currentText: "",
        titleText: ''
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(titleText) => this.setState({ titleText })}
                    value={this.state.titleText} />
                <TextInput
                    onChangeText={(currentText) => this.setState({ currentText })}
                    value={this.state.currentText} />
                <Button
                    title="Submit Todo"
                    onPress={() => this.props.onAddTodo(this.state.titleText, this.state.currentText)}
                />
            </View>
        )
    }
}

export default TodoInputComponent