import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageInternationalRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-320q-17 0-28.5-11.5T40-360v-240q0-17 11.5-28.5T80-640q17 0 28.5 11.5T120-600v240q0 17-11.5 28.5T80-320Zm120 0q-17 0-28.5-11.5T160-360v-244q0-15 10.5-25.5T196-640h22q11 0 19 5.5t13 14.5l70 140v-120q0-17 11.5-28.5T360-640q17 0 28.5 11.5T400-600v244q0 15-10.5 25.5T364-320h-22q-11 0-19-5.5T310-340l-70-140v120q0 17-11.5 28.5T200-320Zm360 0q-17 0-28.5-11.5T520-360v-200h-40q-17 0-28.5-11.5T440-600q0-17 11.5-28.5T480-640h160q17 0 28.5 11.5T680-600q0 17-11.5 28.5T640-560h-40v200q0 17-11.5 28.5T560-320Zm200 0q-17 0-28.5-11.5T720-360v-240q0-17 11.5-28.5T760-640q17 0 28.5 11.5T800-600v200h80q17 0 28.5 11.5T920-360q0 17-11.5 28.5T880-320H760Z" />
  </svg>
)