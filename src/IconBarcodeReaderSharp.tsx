import React from 'react'
import { IconProps } from './types'

export const IconBarcodeReaderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h449L569-520H439l-11 40h52v160h-94l-30 112q-11 39-43 63.5T240-120Zm0-80q14 0 24-8t14-21l78-291h-83l-72 270q-5 19 7 34.5t32 15.5Zm520-560-25-54 145-66 24 55-144 65Zm120 280-145-65 25-55 144 66-24 54ZM760-650v-60h160v60H760ZM315-520Zm-35-80h240l80-160H280q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm120-80Z" />
  </svg>
)
