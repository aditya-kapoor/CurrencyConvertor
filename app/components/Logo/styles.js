import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $largeContainerSize: imageWidth,

  $smallImageSize: imageWidth / 4,
  $largeImageSize: imageWidth / 2,

  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  backgroundImage: {          // <- new
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  image: {
    width: '$largeImageSize'
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 10,
    color: '$white'
  }
});
