import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircleChart({ Progress = 0, Size = 0, Radius = 0, StrokeWidth = 0 }) {
  const animatedProps = Animated.useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - Progress)
  }));
  const CIRCLE_LENGTH = (2 * Math.PI) * Radius;

  return (
    <View style={styles.container}>
      <Svg style={{ position: 'absolute' }}>
        <Circle
          cx={Size / 2}
          cy={Size / 2}
          r={Radius}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={Size / 2}
          cy={Size / 2}
          r={Radius}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});