import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const GameOverScreen = (props) =>{

    return (
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number Was : {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
});
export default GameOverScreen;