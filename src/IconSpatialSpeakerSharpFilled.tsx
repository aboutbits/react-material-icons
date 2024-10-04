import React from 'react'
import { IconProps } from './types.js'

export const IconSpatialSpeakerSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80q-134 0-227-93T40-400h80q0 100 70 170t170 70v80Zm0-140q-75 0-127.5-52.5T180-400h80q0 42 29 71t71 29v80Zm-40-140v-480h320v480H320Zm280 140v-80q42 0 71-29t29-71h80q0 75-52.5 127.5T600-220Zm0 140v-80q100 0 170-70t70-170h80q0 134-93 227T600-80Z" />
  </svg>
)