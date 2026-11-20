import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconThermostatCarbonSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-48 48-480l432-432 432 432L480-48Z" />
  </svg>
)
