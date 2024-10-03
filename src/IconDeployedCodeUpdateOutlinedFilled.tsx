import React from 'react'
import { IconProps } from './types.js'

export const IconDeployedCodeUpdateOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-80 120-120-28-28-72 72v-164h-40v164l-72-72-28 28L720-80ZM480-526 243-663l-43 25v42l280 162 280-162v-42l-43-25-237 137ZM440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v186q-27-13-57.5-20t-62.5-7q-116 0-198 82t-82 198q0 32 6.5 61.5T466-82q-7-2-13.5-3.5T440-91ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0Z" />
  </svg>
)
