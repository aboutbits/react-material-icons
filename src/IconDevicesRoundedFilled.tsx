import React from 'react'
import { IconProps } from './types'

const IconDevicesRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-160q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280h20v-440q0-33 23.5-56.5T240-800h560q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720H240v440h180q25 0 42.5 17.5T480-220q0 25-17.5 42.5T420-160H140Zm460 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Z" />
  </svg>
)

export { IconDevicesRoundedFilled as default }
