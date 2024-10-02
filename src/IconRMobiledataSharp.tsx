import React from 'react'
import { IconProps } from './types'

export const IconRMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-560v-320h280v208h-48l48 112h-80l-46-106h-74v106H80Zm80-186h120v-54H160v54Z" />
  </svg>
)
