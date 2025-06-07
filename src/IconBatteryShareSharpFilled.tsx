import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryShareSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-280v-200h247l-63-64 56-56 160 160-160 160-57-57 64-63H480v120h-80ZM280-80v-720h120v-80h160v80h120v160h-80v-80H360v560h240v-80h80v160H280Z" />
  </svg>
)
