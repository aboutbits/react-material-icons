import React from 'react'
import { IconProps } from './types.js'

export const IconSpatialAudioRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M665-665q-44-44-70.5-99T561-880q-2-17 9.5-28.5T599-920q17 0 29 11.5t14 28.5q6 45 26.5 86t52.5 73q32 32 73 52.5t86 27.5q17 2 28.5 13.5T920-599q0 17-11.5 28.5T880-561q-61-7-116-33.5T665-665Zm112-112q-22-22-36-48.5T722-882q-3-15 8-26.5t28-11.5q16 0 28 10.5t17 26.5q5 14 12 26.5t18 23.5q11 11 23 17.5t26 11.5q16 5 27 17t11 29q0 17-12 28t-28 8q-29-6-55-20t-48-35ZM400-440q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-200v-32q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v32q0 33-23.5 56.5T640-120H160q-33 0-56.5-23.5T80-200Z" />
  </svg>
)