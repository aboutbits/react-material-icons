import React from 'react'
import { IconProps } from './types.js'

export const IconBedtimeOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M766-195 195-766q43-44 97.5-73T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-11 63-40.5 117.5T766-195ZM735 2 627-106q-34 13-69.5 19.5T484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-38 6.5-73.5T106-627L-1-734l57-57L792-55 735 2Z" />
  </svg>
)
