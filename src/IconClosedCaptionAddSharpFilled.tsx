import React from 'react'
import { IconProps } from './types.js'

export const IconClosedCaptionAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360h160q9-7 19-12.5t21-10.5v-57h-60v20h-80v-120h80v20h60v-80H520v240Zm-280 0h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm-40 200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v324q-49-11-97.5 4.5T659-341q-36 36-50.5 83.5T604-160H200Zm560 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
