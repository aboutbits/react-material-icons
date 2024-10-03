import React from 'react'
import { IconProps } from './types.js'

export const IconHeatPumpBalanceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-696v480h240v-400h80v400h240v-440h87l-47 46 56 57 144-143-144-144-56 57 47 47H640v440h-80v-400H320v400h-80v-400h-80ZM40-96v-400h880v400H40Z" />
  </svg>
)
