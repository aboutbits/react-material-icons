import React from 'react'
import { IconProps } from './types'

export const IconMultimodalHandEyeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M313-40q-24 0-46-9t-39-26L24-280l33-34q14-14 34-19t40 0l69 20v-327q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v280h40v-120q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480v120h40v-80q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440v80h40q0-17 11.5-28.5T600-400q17 0 28.5 11.5T640-360v160q0 66-47 113T480-40H313Zm327-480q-91 0-168-48T360-700q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132t-168 48Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-700q0-25 17.5-42.5T640-760q25 0 42.5 17.5T700-700q0 25-17.5 42.5T640-640Z" />
  </svg>
)
