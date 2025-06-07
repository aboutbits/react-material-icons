import React from 'react'
import { IconProps } from './types.js'

export const Icon2kPlusOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-220 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-200 0h160v-60H300v-40h60q17 0 28.5-11.5T400-500v-60q0-17-11.5-28.5T360-600H240v60h100v40h-60q-17 0-28.5 11.5T240-460v100Zm-40 240q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)
