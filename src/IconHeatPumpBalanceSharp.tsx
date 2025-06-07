import React from 'react'
import { IconProps } from './types.js'

export const IconHeatPumpBalanceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-696h80v400h80v-400h240v400h80v-440h167l-47-47 56-57 144 144-144 143-56-57 47-46h-87v440H480v-400h-80v400H160v-480ZM40-96v-400h880v400H40Zm80-80h720v-240H120v240Zm720-240H120h720Z" />
  </svg>
)
