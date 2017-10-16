# react-native-bpk-component-animate-height

> Backpack React Native animate height component.

## Installation

```sh
npm install react-native-bpk-component-animate-height --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BpkAnimateHeight from 'react-native-bpk-component-animate-height';
import BpkText from 'react-native-bpk-component-text';
import * as TOKENS from 'bpk-tokens/tokens/ios/base.react.native.es6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: TOKENS.spacingBase,
  }
  animateHeight: {
    marginBottom: TOKENS.spacingBase,
  }
});

export default class App extends Component {
  state = {
    expanded: true,
  }

  onToggle= () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    <View style={styles.container}>
      <BpkAnimateHeight
        expanded={this.state.expanded}
        style={styles.animateHeight}
      >
        <BpkText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </BpkText>
      </BpkAnimateHeight>
      <BpkButton title="Toggle" onPress={this.onToggle} />
    </View>
  }
}
```

## Props

| Property  | PropType                   | Required | Default Value |
| --------- | -------------------------- | -------- | ------------- |
| expanded  | bool                       | Yes      | -             |
| children  | oneOf(Node, arrayOf(Node)  | No       | null          |
