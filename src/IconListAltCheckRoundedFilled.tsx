import React from 'react'
import { IconProps } from './types.js'

export const IconListAltCheckRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m694-193 141-142q12-12 28.5-12t28.5 12q12 12 12 28.5T892-278L722-108q-12 12-28.5 12T665-108l-85-85q-11-12-11-28.5t12-28.5q12-12 28-12t28 12l57 57ZM320-440q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm320 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h160Zm0-160q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H480q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600h160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v275q0 16-6.5 30.5T816-429L694-306l-29-29q-23-23-56.5-23T552-335l-56 57q-12 12-18 26.5t-6 29.5q0 14 4 25.5t12 22.5q12 17 4.5 35.5T466-120H200Z" />
  </svg>
)
