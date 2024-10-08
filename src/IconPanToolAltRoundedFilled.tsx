import React from 'react'
import { IconProps } from './types'

const IconPanToolAltRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M398-120q-27 0-51.5-11.5T305-164L46-483l26-25q19-19 45-22t47 12l116 81v-403q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v320h80v-160q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v160h80v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v120h80v-40q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560v280q0 66-47 113t-113 47H398Z" />
  </svg>
)

export { IconPanToolAltRoundedFilled as default }
