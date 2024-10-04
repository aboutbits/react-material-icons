import React from 'react'
import { IconProps } from './types.js'

export const IconFunctionsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160v-80l260-240-260-240v-80h480v120H431l215 200-215 200h289v120H240Z" />
  </svg>
)