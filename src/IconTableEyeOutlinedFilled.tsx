import React from 'react'
import { IconProps } from './types'

const IconTableEyeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v333q-19-11-38.5-20T760-463v-57H627v40q-21 1-41 3t-39 7v-50H413v111q-24 18-45.5 40.5T328-320H200v120h82q10 22 21.5 42t24.5 38H200Zm0-280h133v-120H200v120Zm0-200h560v-160H200v160ZM640-40q-91 0-168-48T360-220q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132T640-40Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Z" />
  </svg>
)

export { IconTableEyeOutlinedFilled as default }
