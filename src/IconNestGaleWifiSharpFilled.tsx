import React from 'react'
import { IconProps } from './types'

const IconNestGaleWifiSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m104-560 16-240h720l16 240H104Zm96 400-13-40H80l19-280h762l19 280H773l-13 40H200Z" />
  </svg>
)

export { IconNestGaleWifiSharpFilled as default }
