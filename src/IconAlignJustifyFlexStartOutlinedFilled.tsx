import React from 'react'
import { IconProps } from './types'

export const IconAlignJustifyFlexStartOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h80v800H80Zm440-200v-400h120v400H520Zm-240 0v-400h120v400H280Z" />
  </svg>
)
