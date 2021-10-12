import React from "react";
import { View } from "react-native";
import { Svg, Circle, Text as SVGText } from 'react-native-svg'

const DEFAULT_PROGRESS = 25;
const DEFAULT_SIZE = 100;
const DEFAULT_STROKEWIDTH = 10;
const DEFAULT_TEXTSIZE = 16;
const DEFAULT_BACKGROUND_COLOR = 'gray';
const DEFAULT_COLOR = 'black';

export default function CircleChart({ 
  ProgressPercentage, 
  Size, 
  StrokeWidth, 
  Text, 
  TextSize,
  TextColor,
  BackgroundColor,
  StrokeColor }) {

  const progressPercent = ProgressPercentage ? ProgressPercentage : DEFAULT_PROGRESS;
  const size = Size ? Size : DEFAULT_SIZE;
  const strokeWidth = StrokeWidth ? StrokeWidth : DEFAULT_STROKEWIDTH;
  const text = Text ? Text : '';
  const textSize = TextSize ? TextSize : DEFAULT_TEXTSIZE;
  const textColor = TextColor ? TextColor : DEFAULT_COLOR;
  const backgroundColor = BackgroundColor ? BackgroundColor : DEFAULT_BACKGROUND_COLOR;
  const strokeColor = StrokeColor ? StrokeColor : DEFAULT_COLOR;

  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;

  return (
    <View style={{margin: 10}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle 
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}} />
        
        {/* Progress Circle */}
        <Circle 
          stroke={strokeColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size/2}, ${size/2})`}
          {...{strokeWidth}} />

        {/* Text */}
        <SVGText
          fontSize={textSize}
          x={size / 2}
          y={size / 2 + (textSize / 2) - 1}
          textAnchor="middle"
          fill={textColor}>{text}</SVGText>
      </Svg>
    </View>
  );
}