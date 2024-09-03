import React from 'react'
import { IconProps } from './types'

const IconForward5RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-34-34q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T509-891l103 103q12 12 12 28t-12 28L509-629q-12 12-28.5 11.5T452-630q-11-12-11.5-28t11.5-28l34-34h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm40-240H410q-13 0-21.5-8.5T380-350q0-13 8.5-21.5T410-380h90v-40h-90q-13 0-21.5-8.5T380-450v-80q0-13 8.5-21.5T410-560h120q13 0 21.5 8.5T560-530q0 13-8.5 21.5T530-500h-90v40h90q13 0 21.5 8.5T560-430v70q0 17-11.5 28.5T520-320Z" />
  </svg>
)

export { IconForward5RoundedFilled as default }
