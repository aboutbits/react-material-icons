import React from 'react'
import { IconProps } from './types.js'

export const IconStrategySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-520 80-600v-160l140-80 140 80v160l-140 80Zm0-92 60-34v-68l-60-34-60 34v68l60 34Zm440 123v-93l140 82v280L560-80 320-220v-280l140-82v93l-60 35v188l160 93 160-93v-188l-60-35Zm-140 89v-480h360l-80 120 80 120H600v240h-80Zm40 69ZM220-680Z" />
  </svg>
)
