import React from 'react'
import { IconProps } from './types'

const IconAsteriskRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-17 0-28.5-11.5T440-160v-224L282-225q-12 12-28.5 12T225-225q-12-12-12-28.5t12-28.5l159-158H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h224L225-678q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l158 159v-224q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v224l158-159q12-12 28.5-12t28.5 12q12 12 12 28.5T735-678L576-520h224q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H576l159 158q12 12 12 28.5T735-225q-12 12-28.5 12T678-225L520-384v224q0 17-11.5 28.5T480-120Z" />
  </svg>
)

export { IconAsteriskRounded as default }
