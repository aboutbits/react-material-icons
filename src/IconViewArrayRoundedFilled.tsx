import React from 'react'
import { IconProps } from './types.js'

export const IconViewArrayRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-260v-440q0-25 17.5-42.5T180-760q25 0 42.5 17.5T240-700v440q0 25-17.5 42.5T180-200q-25 0-42.5-17.5T120-260Zm220 60q-25 0-42.5-17.5T280-260v-440q0-25 17.5-42.5T340-760h280q25 0 42.5 17.5T680-700v440q0 25-17.5 42.5T620-200H340Zm380-60v-440q0-25 17.5-42.5T780-760q25 0 42.5 17.5T840-700v440q0 25-17.5 42.5T780-200q-25 0-42.5-17.5T720-260Z" />
  </svg>
)