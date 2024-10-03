import React from 'react'
import { IconProps } from './types.js'

export const IconVariableInsertSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h720v160H560v240H120Zm744 120L720-303v123h-80v-260h260v80H776l144 144-56 56Z" />
  </svg>
)
