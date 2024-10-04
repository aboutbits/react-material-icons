import React from 'react'
import { IconProps } from './types'

const IconElectricBoltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Z" />
  </svg>
)

export { IconElectricBoltSharpFilled as default }
