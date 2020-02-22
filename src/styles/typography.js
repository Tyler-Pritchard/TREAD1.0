import * as Colors from './colors'
import * as Spacing from './spacing'

export const extraLargeFontSize = 30
export const largeFontSize = 22
export const buttonFontSize = 16
export const baseFontSize = 14
export const smallFontSize = 12
export const smallestFontSize = 8
export const largeHeaderFontSize = 20
export const headerFontSize = 18

export const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

export const link = {
  color: Colors.thoughtbotRed,
  fontWeight: 'bold',
}

export const bodyText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
  lineHeight: 19,
}

export const headerText = {
  color: Colors.darkText,
  fontSize: headerFontSize,
  fontWeight: 'bold',
}

export const descriptionText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
}

export const screenHeader = {
  ...base,
  color: Colors.baseText,
  fontSize: largeFontSize,
  fontWeight: 'bold',
}

export const screenFooter = {
  ...base,
  ...descriptionText,
}

export const sectionHeader = {
  ...base,
  ...headerText,
}

export const count = {
  ...base,
  ...descriptionText,
}