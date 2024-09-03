import React from 'react'
import { IconProps } from './types'

const IconTabCloseRightOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-40-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Zm-560-80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v334q-19-7-39.5-10.5T759-440q-39 0-74 12t-64 33l-85-85 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56 114-114 85 85q-21 29-33 64.5T520-200q0 21 3.5 41t10.5 39H200Z" />
  </svg>
)

export { IconTabCloseRightOutlinedFilled as default }
