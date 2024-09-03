import React from 'react'
import { IconProps } from './types'

const IconRadioSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-614l556-226 26 66-330 134h548v640H80Zm80-80h640v-280H160v280Zm160-40q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-520h480v-80h80v80h80v-120H160v120Zm0 360v-280 280Z" />
  </svg>
)

export { IconRadioSharp as default }
