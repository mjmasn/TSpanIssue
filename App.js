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
        <Text textAnchor="middle" fontSize={24}>
          <TSpan x={width / 2} dy={128}>
            <TSpan fill="red">Red</TSpan>
            <TSpan fill="green">Green</TSpan>
            <TSpan fill="blue">Blue</TSpan>
          </TSpan>
          <TSpan x={width / 2} dy={28}>
            <TSpan fill="black">Second line</TSpan>
          </TSpan>
        </Text>
      </Svg>
    </View>
  );
};

export default App;
