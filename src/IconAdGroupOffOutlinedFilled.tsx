import React from 'react'
import { IconProps } from './types'

const IconAdGroupOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 608-240H320q-33 0-56.5-23.5T240-320v-288L28-820l56-56L876-84l-56 56ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm668-165L353-720h447v-80H320v47l-75-75q8-24 28.5-38t46.5-14h480q33 0 56.5 23.5T880-800v480q0 26-14 46.5T828-245Z" />
  </svg>
)

export { IconAdGroupOffOutlinedFilled as default }
