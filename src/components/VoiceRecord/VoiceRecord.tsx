import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
  SpeechStartEvent,
  SpeechEndEvent,
} from '@react-native-voice/voice';
import {saveOrPush} from '../../services/asyncStorage';

export interface VoiceRecordProps {
  onSave: () => void;
  onDismiss: () => void;
}

export const VoiceRecord = ({onSave, onDismiss}: VoiceRecordProps) => {
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  const [isStopped, setIsStopped] = useState(false);
  const [results, setResults] = useState([]);
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    setTimeout(() => {
      startRecognizing();
    }, 0);

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      runAnimation();
    } else {
      //When stopping reset the value to 0 so animated item doesn't stop in a random position
      spinValue.stopAnimation();
      spinValue.setValue(0);
    }

    //Return a function from useEffect to stop the animation on unmount
    return () => spinValue.stopAnimation();
  }, [isRunning, spinValue]);

  const runAnimation = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(o => {
      if (o.finished) {
        runAnimation();
      }
    });
  };

  const onSpeechStart = (e: SpeechStartEvent) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
  };

  const onSpeechEnd = (e: SpeechEndEvent) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setIsRunning(false);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    console.log('startRecognizing');
    try {
      await Voice.start('pl');
    } catch (e) {
      console.error(e);
    }
    setError('');
    setResults([]);
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setError('');
      setResults([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleStart = async () => {
    setIsRunning(true);
    setIsStopped(false);
    await startRecognizing();
  };

  const handleRepeat = async () => {
    setIsRunning(true);
    await destroyRecognizer();
    await startRecognizing();
  };

  const handleStop = async () => {
    setIsRunning(false);
    setIsStopped(true);
    await stopRecognizing();
    await destroyRecognizer();
  };

  const handleSave = async () => {
    await saveOrPush(`${results[0]}`);
    onSave();
  };

  const handleDismiss = () => {
    onDismiss();
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
      }}>
      <Text style={{alignSelf: 'center'}}>{results[0]}</Text>
      <AnimatedIcon
        size={200}
        name="microphone"
        onPress={startRecognizing}
        style={{
          alignSelf: 'center',
          transform: [
            {
              rotate: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {isStopped ? (
          <>
            <Icon size={50} name="play" onPress={handleStart} />
          </>
        ) : isRunning ? (
          <Icon size={50} name="stop" onPress={handleStop} />
        ) : (
          <>
            <Icon size={50} name="remove" onPress={handleDismiss} />
            <Icon size={50} name="repeat" onPress={handleRepeat} />
            <Icon size={50} name="check" onPress={handleSave} />
          </>
        )}
      </View>
    </View>
  );
};
