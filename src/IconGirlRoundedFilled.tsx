import React from 'react'
import { IconProps } from './types'

export const IconGirlRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-660q-29 0-49.5-20.5T410-730q0-29 20.5-49.5T480-800q29 0 49.5 20.5T550-730q0 29-20.5 49.5T480-660Zm-80 460v-120h-22q-21 0-33.5-17t-4.5-37l75-201q8-20 25.5-32.5T480-620q22 0 39.5 12.5T545-575l75 201q8 20-4.5 37T582-320h-22v120q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200Z" />
  </svg>
)
