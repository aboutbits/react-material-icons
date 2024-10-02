import React from 'react'
import { IconProps } from './types'

export const IconDoNotTouchOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m840-234-80-80v-446q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v526ZM360-714l-80-80v-6q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v86Zm160 160-80-80v-246q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v326Zm160 81h-80v-367q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v367Zm37 343L360-487v224L212-367l157 229q5 8 14 13t19 5h278q10 0 19.5-2.5T717-130ZM402-40q-30 0-56-13.5T303-92L48-465l24-23q19-19 45-22t47 12l116 81v-150L27-820l57-57L876-85l-57 57-44-44q-20 15-44 23.5T680-40H402Zm137-268Zm61-165Z" />
  </svg>
)
