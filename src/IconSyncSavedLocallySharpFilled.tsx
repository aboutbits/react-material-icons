import React from 'react'
import { IconProps } from './types'

const IconSyncSavedLocallySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m437-398 227-226-57-57-170 170-85-85-56 56 141 142ZM40-120v-80h880v80H40Zm40-120v-600h800v600H80Z" />
  </svg>
)

export { IconSyncSavedLocallySharpFilled as default }
