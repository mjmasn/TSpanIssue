/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Text, TSpan} from 'react-native-svg';

const App: () => React$Node = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <Svg width={width} height={height}>
        <Text textAnchor="middle" width={width} y={28} fontSize={16}>
          <TSpan x={width / 2} dy={0}>
            <TSpan fill="red">Nested</TSpan>
            <TSpan fill="green">multiple</TSpan>
            <TSpan fill="blue">TSpans</TSpan>
          </TSpan>
          <TSpan x={width / 2} dy={28}>
            <TSpan fill="black">Nested single TSpan</TSpan>
          </TSpan>
        </Text>
        <Text textAnchor="middle" x={width / 2} y={128} fontSize={16}>
          <TSpan fill="red">Top-level</TSpan>
          <TSpan fill="green">multiple</TSpan>
          <TSpan fill="blue">TSpans</TSpan>
        </Text>
        <Text textAnchor="middle" x={width / 2} y={156} fontSize={16}>
          <TSpan fill="black">Top-level single TSpan</TSpan>
        </Text>
        <Text textAnchor="middle" x={width / 2} y={228} fontSize={16}>
          <TSpan fill="red">Short</TSpan>
          <TSpan fill="green">&amp; a bit longer</TSpan>
          <TSpan fill="blue">overlap</TSpan>
        </Text>
      </Svg>
    </View>
  );
};

export default App;
