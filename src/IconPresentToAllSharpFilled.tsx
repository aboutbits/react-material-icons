import React from 'react'
import { IconProps } from './types'

const IconPresentToAllSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320h80v-166l64 63 57-57-161-160-160 160 57 56 63-63v167ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconPresentToAllSharpFilled as default }
