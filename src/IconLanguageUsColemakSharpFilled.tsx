import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageUsColemakSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-360h140v-240H580v240Zm-420 80v-400h260v80H240v240h180v80H160Zm340 0v-400h300v400H500Z" />
  </svg>
)
