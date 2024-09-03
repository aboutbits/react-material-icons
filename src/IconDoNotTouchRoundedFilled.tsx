import React from 'react'
import { IconProps } from './types'

const IconDoNotTouchRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M402-40q-30 0-56-13.5T303-92L67-438q-8-12-7-26t12-24q19-19 45-22t47 12l116 81v-150L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-16-15q-20 15-44 23.5T680-40H402Zm198-467v-333q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v367h80v-287q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v429q0 27-24.5 37.5T772-302L623-451q-11-11-17-25.5t-6-30.5ZM280-790v-30q0-17 11.5-28.5T320-860q17 0 28.5 11.5T360-820v30q0 17-11.5 28.5T320-750q-17 0-28.5-11.5T280-790Zm160 150v-240q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v241q0 17-11.5 28T480-600q-17 0-28.5-11.5T440-640Z" />
  </svg>
)

export { IconDoNotTouchRoundedFilled as default }
