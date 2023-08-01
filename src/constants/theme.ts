import {extendTheme} from 'native-base';

export default extendTheme({
  fontConfig: {
    Satoshi: {
      400: {
        normal: 'Satoshi-Regular',
      },
      500: {
        normal: 'Satoshi-Medium',
      },
      700: {
        normal: 'Satoshi-Bold',
      },
    },
  },
  fonts: {
    heading: 'Satoshi',
    body: 'Satoshi',
    mono: 'Satoshi',
  },
});
