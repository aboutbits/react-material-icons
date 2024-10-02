import React from 'react'
import { IconProps } from './types'

export const IconAirplaneTicketSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v640H80Zm274-174 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Z" />
  </svg>
)
