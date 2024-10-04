import React from 'react'
import { IconProps } from './types.js'

export const IconNestWakeOnPressRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-440q-25 0-42.5-17.5T760-500v-240q0-25 17.5-42.5T820-800q25 0 42.5 17.5T880-740v240q0 25-17.5 42.5T820-440ZM301-120q-17 0-31-6.5T245-144L68-323q-11-12-11-28t11-28l28-29q14-14 32-20t37-2l75 16v-326q0-42 29-71t71-29q42 0 71 29t29 71v180h26q5 0 9 1t9 3l152 67q24 11 36 35t7 50l-37 217q-5 29-27.5 48T563-120H301Zm1-80h261l37-218-170-75h-70v-247q0-9-5.5-14.5T340-760q-9 0-14.5 5.5T320-740v424l-167-35 149 151Zm0 0h261-261Z" />
  </svg>
)
