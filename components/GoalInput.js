import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        placeholder='Your course goal!'
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
