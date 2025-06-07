import React from 'react'
import { IconProps } from './types.js'

export const IconAutoAwesomeMosaicOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720Zm80-400v-320h240q33 0 56.5 23.5T840-760v240H520Zm0 400v-320h320v240q0 33-23.5 56.5T760-120H520Z" />
  </svg>
)
