/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View, Platform } from 'react-native';
import BpkText from 'react-native-bpk-component-text';
import BpkButton from 'react-native-bpk-component-button';
import BpkAnimateHeight from './index';

const tokens = Platform.select({
  ios: () => require('bpk-tokens/tokens/ios/base.react.native.common.js'), // eslint-disable-line global-require
  android: () => require('bpk-tokens/tokens/android/base.react.native.common.js'), // eslint-disable-line global-require
})();

const {
  spacingBase,
  colorGray50,
} = tokens;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: spacingBase,
    width: '100%',
    backgroundColor: colorGray50,
  },
  container: {
    marginBottom: spacingBase,
  },
});

const animateHeightContent = (
  <BpkText>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </BpkText>
);

class AnimateHeightDemo extends React.Component {
  state = {
    expanded: false,
  }

  onToggle= () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <View>
        <BpkAnimateHeight
          expanded={this.state.expanded}
          style={{ marginBottom: spacingBase }}
        >
          {this.props.children}
        </BpkAnimateHeight>
        <BpkButton title="Toggle" onPress={this.onToggle} />
      </View>
    );
  }
}

AnimateHeightDemo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AnimateHeightDemo.defaultProps = {
  children: null,
};

storiesOf('BpkAnimateHeight', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
)
  .add('docs:default', () => (
    <AnimateHeightDemo>{animateHeightContent}</AnimateHeightDemo>
  ));
