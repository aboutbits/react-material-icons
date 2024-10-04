import React from 'react'
import { IconProps } from './types'

const IconSyncSavedLocallySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m437-398 227-226-57-57-170 170-85-85-56 56 141 142ZM40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm80-80h640v-440H160v440Zm0 0v-440 440Z" />
  </svg>
)

export { IconSyncSavedLocallySharp as default }
