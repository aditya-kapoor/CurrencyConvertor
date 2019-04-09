import React, { Component } from 'react';
import { View, ImageBackground, Text, Keyboard, Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// See https://github.com/facebook/react-native/issues/16939#issuecomment-390535398

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth:          new Animated.Value(styles.$largeImageSize)
    }
  }

  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';

    this.keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    const { containerImageWidth, imageWidth } = this.state;

    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      })
    ]).start();
  }

  keyboardHide = () => {
    const { containerImageWidth, imageWidth } = this.state;

    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      })
    ]).start();
  }

  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const { tintColor } = this.props;

    const containerImageStyle = [
      styles.containerImage, {
        width: containerImageWidth, height: containerImageWidth
      },
    ];
    const imageStyle = [
      styles.logo,
      { width: imageWidth },
      tintColor ? { tintColor } : null,
    ];

    return(
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground resizeMode="contain" style={styles.backgroundImage} source={require('./images/background.png')}>
            <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>

    );
  }
}

export default Logo;
