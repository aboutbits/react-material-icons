import React from 'react'
import { IconProps } from './types'

const IconAutoDeleteOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-840h240v40h200v80h-40v172q-17-5-39.5-8.5T680-560q-18 0-40.5 3t-39.5 8v-91h-80v130q-22 16-44 39.5T440-424v-216h-80v360h40q0 39 14 83.5t36 76.5H280q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40Zm320 360q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Zm-20 80v128l86 86 28-28-74-74v-112h-40Z" />
  </svg>
)

export { IconAutoDeleteOutlinedFilled as default }
