import React from 'react'
import { IconProps } from './types'

export const IconFolderEyeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v181q0 17-11.5 28.5T840-419q-17 0-28.5-11.5T800-459v-181H480q-16 0-30.5-6T424-663l-57-57H160v480h80q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-80Zm480 40q57 0 107.5-26t82.5-74q-32-48-82.5-74T640-320q-57 0-107.5 26T450-220q32 48 82.5 74T640-120Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Zm-480-80v-480 277-37 240ZM640-40q-79 0-147.5-36T382-178q-6-9-9-19.5t-3-21.5q0-11 3-22t9-21q42-66 110.5-102T640-400q79 0 147.5 36T898-262q6 10 9 20.5t3 21.5q0 11-3 21.5t-9 20.5q-42 66-110.5 102T640-40Z" />
  </svg>
)
