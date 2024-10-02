import React from 'react'
import { IconProps } from './types'

export const IconLogoDevOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h96q19 0 32.5-13.5T382-406v-148q0-19-13.5-32.5T336-600h-96v240Zm46-46v-148h50v148h-50Zm149 46h98v-46h-82v-52h52v-46h-52v-50h82v-46h-98q-13 0-21.5 8.5T405-570v180q0 13 8.5 21.5T435-360Zm206-1q13 0 22.5-8.5T676-391l56-209h-48l-43 164-43-164h-48l56 209q3 13 12.5 21.5T641-361ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)
