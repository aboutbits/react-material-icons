import React from 'react'
import { IconProps } from './types'

const IconWifiCallingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM660-540 439-762q50-38 107-58t114-20q56 0 112.5 20.5T880-760L660-540Z" />
  </svg>
)

export { IconWifiCallingSharpFilled as default }
