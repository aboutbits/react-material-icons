import React from 'react'
import { IconProps } from './types.js'

export const IconAmbulanceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-800q-17 0-28.5-11.5T440-840v-80q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v80q0 17-11.5 28.5T480-800Zm-245 28-63-63q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l64 64q12 12 12 28t-12 28q-12 12-28.5 12T235-772Zm45 532h80q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320h-80q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm320 0h80q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320h-80q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240Zm63-298q12 12 28 12t28-12l90-89q9-9 9-21t-9-21q-9-9-21-8.5t-21 8.5l-76 74-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32Zm57 138q-83 0-141.5-58.5T520-600q0-83 58.5-141.5T720-800q83 0 141.5 58.5T920-600q0 83-58.5 141.5T720-400ZM180-40q-25 0-42.5-17.5T120-100v-286q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h100v-40q0-17 11.5-28.5T400-760h50q14 0 20.5 11.5T470-725q-12 23-19.5 48.5T441-624q-1 10-8 17t-17 7H274l-59 160h244q15 0 28.5 7t23.5 18q40 45 94 70t115 25q17 0 34.5-2t34.5-7q19-5 35 6t16 30v193q0 25-17.5 42.5T780-40q-25 0-42.5-17.5T720-100v-20H240v20q0 25-17.5 42.5T180-40Z" />
  </svg>
)
