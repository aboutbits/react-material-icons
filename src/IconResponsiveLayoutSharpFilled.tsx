import React from 'react'
import { IconProps } from './types.js'

export const IconResponsiveLayoutSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-520H380v-200h460v720H640Zm-260 0v-440h180v440H380Zm-260 0v-440h180v440H120Z" />
  </svg>
)
