import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';


class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base currency');
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
  }

  handleTextChange = (text) => {
    console.log('text changed', text)
  }

  render() {
    return(
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Logo />
        <InputWithButton defaultValue={TEMP_BASE_PRICE}
                         onPress={this.handlePressBaseCurrency}
                         buttonText={TEMP_BASE_CURRENCY}
                         keyboardType="numeric"
                         onChangeText={this.handleTextChange} />
        <InputWithButton onPress={this.handlePressQuoteCurrency}
                         buttonText={TEMP_QUOTE_CURRENCY}
                         editable={false}
                         value={TEMP_QUOTE_PRICE} />
      </Container>
    )
  }
}

export default Home;
