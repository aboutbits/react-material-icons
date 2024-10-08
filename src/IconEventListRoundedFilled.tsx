import React from 'react'
import { IconProps } from './types'

const IconEventListRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640ZM120-240q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h280q17 0 28.5 11.5T440-280q0 17-11.5 28.5T400-240H120Zm520-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640ZM120-640q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h280q17 0 28.5 11.5T440-680q0 17-11.5 28.5T400-640H120Z" />
  </svg>
)

export { IconEventListRoundedFilled as default }
