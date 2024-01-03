import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type AppTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
