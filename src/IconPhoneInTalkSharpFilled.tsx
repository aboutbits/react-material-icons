import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneInTalkSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-482q0-117-81.5-198.5T480-762v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-482h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-482h-80Zm198 362q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z" />
  </svg>
)
