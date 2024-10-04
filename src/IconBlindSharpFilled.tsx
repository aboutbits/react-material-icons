import React from 'react'
import { IconProps } from './types'

const IconBlindSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-60-64-48 104-139v-213q0-31 5.5-68.5T300-596l-60 34v142h-80v-188l216-123q8-5 17-7t19-2q24 0 44 12t30 33l31 67q20 44 61 66t102 22v80h-39L860-78l-35 20-237-413q-40-13-72.5-37.5T460-568q-10 29-15.5 66.5T441-432l79 112v260h-80v-200l-71-102-9 142L240-60Zm220-700q-33 0-56.5-23.5T380-840q0-33 23.5-56.5T460-920q33 0 56.5 23.5T540-840q0 33-23.5 56.5T460-760Z" />
  </svg>
)

export { IconBlindSharpFilled as default }
