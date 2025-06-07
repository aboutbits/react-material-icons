import React from 'react'
import { IconProps } from './types.js'

export const IconShelfPositionSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-200h720v200H120Zm540-280v-440h180v440H660Zm-540 0v-440h180v440H120Zm260 0v-440h200v440H380Z" />
  </svg>
)
