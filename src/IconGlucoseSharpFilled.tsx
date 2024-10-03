import React from 'react'
import { IconProps } from './types.js'

export const IconGlucoseSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M502-80 222-406l96-72 102 65v-427h80v400h60v-240h80v240h60v-200h80v200h60v-120h80v480H502ZM180-560q-59 0-99.5-40.5T40-698q0-34 13.5-59t63.5-82l63-72 63 73q51 59 64 83t13 57q0 57-41 97.5T180-560Z" />
  </svg>
)
