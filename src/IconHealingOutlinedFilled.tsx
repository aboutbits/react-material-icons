import React from 'react'
import { IconProps } from './types'

const IconHealingOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M218-104 104-218q-23-23-23-56t23-56l526-526q23-23 56-23t56 23l114 114q23 23 23 56t-23 56L330-104q-23 23-56 23t-56-23Zm290-122 226-226 122 122q23 23 23 56t-23 56L742-104q-23 23-56 23t-56-23L508-226Zm-28-134q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-80-80q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm160 0q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480q0 17 11.5 28.5T560-440Zm-335-69L104-630q-23-23-23-56t23-56l114-114q23-23 56-23t56 23l122 122-227 225Zm255-11q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Z" />
  </svg>
)

export { IconHealingOutlinedFilled as default }
