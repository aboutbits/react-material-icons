import React from 'react'
import { IconProps } from './types.js'

export const IconSensorsOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 325-521q-2 10-3.5 20t-1.5 21q0 33 12.5 62t34.5 51l-57 57q-32-33-51-76.5T240-480q0-28 6-54t17-49l-59-59q-21 36-32.5 76.5T160-480q0 67 25 125t69 101l-57 57q-54-55-85.5-127.5T80-480q0-62 17.5-117T146-700l-91-91 57-57 736 736-57 57Zm23-205-58-58q21-36 32.5-76.5T800-480q0-67-25-125t-69-101l57-57q54 54 85.5 126.5T880-480q0 61-17.5 116.5T814-260ZM697-377l-62-62q2-10 3.5-20t1.5-21q0-33-12.5-62T593-593l57-57q32 32 51 75.5t19 94.5q0 28-6 54t-17 49Z" />
  </svg>
)