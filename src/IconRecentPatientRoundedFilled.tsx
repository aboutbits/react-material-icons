import React from 'react'
import { IconProps } from './types.js'

export const IconRecentPatientRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-33 0-56.5-23.5T160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q11 0 21.5.5T523-438q16 2 26.5 13.5T560-397v197q0 17-11.5 28.5T520-160H240Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 280h-40q-17 0-28.5-11.5T640-240v-160q0-17 11.5-28.5T680-440h151q17 0 26 14t1 29l-58 117h28q17 0 25.5 15t.5 30L739-33q-4 7-11.5 5T720-38v-162Z" />
  </svg>
)
