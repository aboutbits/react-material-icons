import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm240-120h240q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280ZM240-560q17 0 28.5-11.5T280-600q0-17-11.5-28.5T240-640q-17 0-28.5 11.5T200-600q0 17 11.5 28.5T240-560Zm160 0q17 0 28.5-11.5T440-600q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600q0 17 11.5 28.5T400-560Zm160 0q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600q0 17 11.5 28.5T560-560Zm160 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-420q17 0 28.5-11.5T280-460q0-17-11.5-28.5T240-500q-17 0-28.5 11.5T200-460q0 17 11.5 28.5T240-420Zm160 0q17 0 28.5-11.5T440-460q0-17-11.5-28.5T400-500q-17 0-28.5 11.5T360-460q0 17 11.5 28.5T400-420Zm160 0q17 0 28.5-11.5T600-460q0-17-11.5-28.5T560-500q-17 0-28.5 11.5T520-460q0 17 11.5 28.5T560-420Zm160 0q17 0 28.5-11.5T760-460q0-17-11.5-28.5T720-500q-17 0-28.5 11.5T680-460q0 17 11.5 28.5T720-420Z" />
  </svg>
)
