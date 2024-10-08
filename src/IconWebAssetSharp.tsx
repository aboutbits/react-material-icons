import React from 'react'
import { IconProps } from './types'

const IconWebAssetSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h640v-400H160v400Z" />
  </svg>
)

export { IconWebAssetSharp as default }
