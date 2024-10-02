import React from 'react'
import { IconProps } from './types'

export const IconBarcodeReaderOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h320q45 0 68 38t3 78l-80 160q-11 20-29.5 32T520-520h-81l-11 40h12q17 0 28.5 11.5T480-440v80q0 17-11.5 28.5T440-320h-54l-30 112q-11 39-43 63.5T240-120Zm520-640-25-54 145-66 24 55-144 65Zm120 280-145-65 25-55 144 66-24 54ZM760-650v-60h160v60H760Z" />
  </svg>
)
