import React from 'react'
import { IconProps } from './types'

export const IconKeyOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M790-57 488-359q-32 54-87 86.5T280-240q-100 0-170-70T40-480q0-66 32.5-121t86.5-87L57-790l57-56 732 733-56 56Zm51-503 79 79-160 160-80-79-3 4-84-84-80-80h328ZM280-360q43 0 75-26.5t41-64.5l-22.5-22.5-50-50-50-50L251-596q-42 9-66.5 42.5T160-480q0 50 35 85t85 35Z" />
  </svg>
)
