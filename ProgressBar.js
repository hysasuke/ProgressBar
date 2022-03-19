import { View, Text, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

export default function ProgressBar(props) {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [state, _setState] = useState({
    containerWidth: 0,
    containerHeight: 0,
    animationStarted: false,
  });
  const setState = newState => {
    _setState(prevState => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    if (props.type === 'timing' && props.duration) {
      let duration = props.duration;
      if (props.initialValue) {
        let percentage = props.initialValue / 100;
        let value = state.containerWidth * percentage;
        duration = duration * (1 - percentage);
        progressAnim.setValue(value);
      }
      if (props.animationStarted) {
        setState({ animationStarted: true });
        startProgressAnimation({
          duration: duration,
          toValue: state.containerWidth,
        });
      } else {
        progressAnim.stopAnimation();
      }
    }
  }, [props.animationStarted, state.containerWidth]);

  useEffect(() => {
    if (!props.type) {
      let percentage = props.progress ? props.progress / 100 : 0;
      let toValue = state.containerWidth * percentage;
      if (!state.animationStarted) {
        setState({ animationStarted: true });
        startProgressAnimation({ toValue, duration: 500 });
      } else {
        progressAnim.stopAnimation();
        startProgressAnimation({ toValue, duration: 500 });
      }
    }
  }, [props.progress]);

  const startProgressAnimation = ({ toValue, duration }) => {
    Animated.timing(progressAnim, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: false,
    }).start(() => {
      setState({ animationStarted: false });
    });
  };

  return (
    <View style={{ ...props.containerShadowStyle }}>
      <Animated.View
        {...props}
        style={{ ...props.style, overflow: 'hidden' }}
        onLayout={event => {
          const layout = event.nativeEvent.layout;
          if (
            state.containerWidth !== layout.width ||
            state.containerHeight !== layout.height
          ) {
            setState({
              containerWidth: layout.width,
              containerHeight: layout.height,
            });
          }
        }}
      >
        <Animated.View
          style={{
            ...props.trackStyle,
            width: progressAnim,
            position: 'absolute',
            left: 0,
            top: 0,
            height: state.containerHeight,
            backgroundColor: props.trackColor
              ? props.trackColor
              : 'transparent',
          }}
        ></Animated.View>
        {props.children}
      </Animated.View>
    </View>
  );
}
