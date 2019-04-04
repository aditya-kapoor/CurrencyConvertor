import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

import styles from './styles';

const ListItem = ({text, onPress, selected = false, checkmark = true, visible = true, customIcon = null, iconBackground = null}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon iconBackground={iconBackground} checkmark={checkmark} visible={visible} />: <Icon />}
      { customIcon }
    </View>
  </TouchableHighlight>
)

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
}

export default ListItem;
