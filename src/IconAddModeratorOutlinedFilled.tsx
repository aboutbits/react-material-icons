import React from 'react'
import { IconProps } from './types'

const IconAddModeratorOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-200 0q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-26-13-58.5-20t-61.5-7q-116 0-198 82t-82 198q0 62 23.5 112T483-81q-1 0-1.5.5t-1.5.5Zm180-80h40v-100h100v-40H700v-100h-40v100H560v40h100v100Z" />
  </svg>
)

export { IconAddModeratorOutlinedFilled as default }
