import React from 'react'
import { IconProps } from './types.js'

export const IconWallpaperRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-200q0-17 11.5-28.5T160-440q17 0 28.5 11.5T200-400v200h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm560 0H560q-17 0-28.5-11.5T520-160q0-17 11.5-28.5T560-200h200v-200q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400v200q0 33-23.5 56.5T760-120ZM450-320l104-139q6-8 16-8t16 8l110 147q8 10 2 21t-18 11H280q-12 0-18-11t2-21l80-107q6-8 16-8t16 8l74 99ZM120-760q0-33 23.5-56.5T200-840h200q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760H200v200q0 17-11.5 28.5T160-520q-17 0-28.5-11.5T120-560v-200Zm720 0v200q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-200H560q-17 0-28.5-11.5T520-800q0-17 11.5-28.5T560-840h200q33 0 56.5 23.5T840-760ZM620-560q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Z" />
  </svg>
)