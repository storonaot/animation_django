import {
  lime500, lime600, lime800,
  purple500,
  grey100, grey300, grey400, grey500,
  darkBlack, white, fullBlack
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

export default {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lime600,
    primary2Color: lime800,
    primary3Color: grey400,
    accent1Color: purple500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lime500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
}
