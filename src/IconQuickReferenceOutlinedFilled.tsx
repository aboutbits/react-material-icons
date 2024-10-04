import React from 'react'
import { IconProps } from './types.js'

export const IconQuickReferenceOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0 280q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-600h200L480-800l200 200-200-200v200ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-20-6-40-9t-40-3q-57 0-107.5 21.5T484-480H280v80h147q-9 19-15 39t-9 41H280v80h123q7 45 28 86.5T485-80H200Z" />
  </svg>
)