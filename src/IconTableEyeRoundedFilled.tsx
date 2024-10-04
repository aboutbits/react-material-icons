import React from 'react'
import { IconProps } from './types'

const IconTableEyeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v282q0 17-11.5 28T800-439q-17 0-28.5-11.5T760-479v-41H627v42q0 17-11.5 28T587-439q-17 0-28.5-11.5T547-479v-41H413v120q0 33-23.5 56.5T333-320H200v120h80q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120h-80Zm0-280h133v-120H200v120Zm0-200h560v-160H200v160ZM640-40q-79 0-147.5-36T382-178q-6-9-9-19.5t-3-21.5q0-11 3-22t9-21q42-66 110.5-102T640-400q79 0 147.5 36T898-262q6 10 9 20.5t3 21.5q0 11-3 21.5t-9 20.5q-42 66-110.5 102T640-40Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Z" />
  </svg>
)

export { IconTableEyeRoundedFilled as default }
