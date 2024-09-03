import React from 'react'
import { IconProps } from './types'

const Icon5kPlusRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-460v40q0 8 6 14t14 6q8 0 14-6t6-14v-40h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-40q0-8-6-14t-14-6q-8 0-14 6t-6 14v40h-40q-8 0-14 6t-6 14q0 8 6 14t14 6h40Zm-160 10 62 79q2 3 22 11 17 0 25-15.5t-3-29.5l-56-75 57-76q11-14 3-29t-26-15q-7 0-12.5 3t-9.5 8l-62 79v-60q0-13-8.5-21.5T470-600q-13 0-21.5 8.5T440-570v180q0 13 8.5 21.5T470-360q13 0 21.5-8.5T500-390v-60Zm-160 30h-70q-13 0-21.5 8.5T240-390q0 13 8.5 21.5T270-360h90q17 0 28.5-11.5T400-400v-60q0-17-11.5-28.5T360-500h-60v-40h70q13 0 21.5-8.5T400-570q0-13-8.5-21.5T370-600H270q-13 0-21.5 8.5T240-570v80q0 13 8.5 21.5T270-460h70v40ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { Icon5kPlusRoundedFilled as default }
