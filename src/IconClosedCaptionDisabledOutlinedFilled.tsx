import React from 'react'
import { IconProps } from './types.js'

export const IconClosedCaptionDisabledOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 687-160H200q-33 0-56.5-23.5T120-240v-487l-93-93 57-57L876-85l-57 57Zm21-207L706-369q7-5 10.5-13.5T720-400v-40h-60v20h-5l-75-75v-45h80v20h60v-40q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v5L275-800h485q33 0 56.5 23.5T840-720v485ZM280-360h120q17 0 28.5-11.5T440-400v-7l-33-33h-27v20h-80v-127l-45-45q-7 5-11 13.5t-4 18.5v160q0 17 11.5 28.5T280-360Z" />
  </svg>
)
