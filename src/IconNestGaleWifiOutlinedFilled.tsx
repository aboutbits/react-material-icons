import React from 'react'
import { IconProps } from './types'

const IconNestGaleWifiOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m104-560 11-165q2-32 25-53.5t55-21.5h570q32 0 55 21.5t25 53.5l11 165H104Zm96 400-13-40h-21q-35 0-58.5-25T86-285l13-195h762l13 195q2 35-21.5 60T794-200h-21l-13 40H200Z" />
  </svg>
)

export { IconNestGaleWifiOutlinedFilled as default }
