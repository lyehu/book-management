import colors from './colors';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {main: colors.primary},
    secondary: {main: colors.secondary},
    error: {main: colors.danger},
    warning: {main: colors.warning},
    success: {main: colors.success},
    grey: {
      50: colors.light,
      100: colors.grey5,
      500: colors.grey4,
      600: colors.grey3,
      700: colors.grey2,
      800: colors.grey1
    }
  }
})

export default theme;