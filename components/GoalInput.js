import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          value={enteredGoalText}
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#fc0317' />
          </View>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
              disabled={enteredGoalText === ''}
              color='#0373fc'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'darkblue',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#03d3fc',
    borderRadius: 6,
    backgroundColor: '#03d3fc',
    color: 'black',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
