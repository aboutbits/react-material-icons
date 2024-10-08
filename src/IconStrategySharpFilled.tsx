import React from 'react'
import { IconProps } from './types'

const IconStrategySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80 320-220v-280l140-82v242h200v-242l140 82v280L560-80ZM220-520 80-600v-160l140-80 140 80v160l-140 80Zm300 120v-480h360l-80 120 80 120H600v240h-80Z" />
  </svg>
)

export { IconStrategySharpFilled as default }
