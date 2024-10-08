import React from 'react'
import { IconProps } from './types'

const IconGestureSelectOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-480v-80h80v80H40ZM473-40q-24 0-46-9t-39-26L184-280l33-34q14-14 34-19t40 0l69 20v-327q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v280h40v-120q0-17 11.5-28.5T520-520q17 0 28.5 11.5T560-480v120h40v-80q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440v80h40q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v160q0 66-47 113T640-40H473ZM40-640v-80h80v80H40Zm160 160v-80h80v80h-80Zm480 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM40-800v-80h80v80H40Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
  </svg>
)

export { IconGestureSelectOutlinedFilled as default }
