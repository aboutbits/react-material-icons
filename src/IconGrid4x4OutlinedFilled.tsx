import React from 'react'
import { IconProps } from './types'

const IconGrid4x4OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-120H80v-80h120v-160H80v-80h120v-160H80v-80h120v-120h80v120h160v-120h80v120h160v-120h80v120h120v80H760v160h120v80H760v160h120v80H760v120h-80v-120H520v120h-80v-120H280v120h-80Zm80-200h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160Z" />
  </svg>
)

export { IconGrid4x4OutlinedFilled as default }
