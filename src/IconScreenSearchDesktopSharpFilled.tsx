import React from 'react'
import { IconProps } from './types'

const IconScreenSearchDesktopSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m618-358 44-42-84-84q11-17 16.5-36t5.5-40q0-59-41.5-99.5T460-700q-57 0-98.5 40.5T320-560q0 59 41.5 99.5T460-420q21 0 39.5-5.5T536-442l82 84ZM460-480q-33 0-56.5-23.5T380-560q0-33 23.5-56.5T460-640q32 0 56 23.5t24 56.5q0 33-23.5 56.5T460-480ZM40-120v-80h880v80H40Zm40-120v-600h800v600H80Z" />
  </svg>
)

export { IconScreenSearchDesktopSharpFilled as default }
