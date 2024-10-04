import React from 'react'
import { IconProps } from './types.js'

export const IconTableChartSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-640v-200h720v200H120Zm0 520v-440h180v440H120Zm540 0v-440h180v440H660Zm-280 0v-440h200v440H380Z" />
  </svg>
)
