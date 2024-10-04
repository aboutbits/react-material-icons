import React from 'react'
import { IconProps } from './types.js'

export const IconJoinRightOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-200q-27 0-52.5-5T538-219q58-49 90-117t32-144q0-76-32-144t-90-117q24-9 49.5-14t52.5-5q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-320 0q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q27 0 52.5 5t49.5 14q-17 14-32 30.5T362-676q-10-2-20.5-3t-21.5-1q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280q11 0 21.5-1t20.5-3q13 18 28 34.5t32 30.5q-24 9-49.5 14t-52.5 5Zm160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
  </svg>
)