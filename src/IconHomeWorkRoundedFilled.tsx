import React from 'react'
import { IconProps } from './types'

const IconHomeWorkRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-479q0-20 9-37t25-28l200-143q11-8 22.5-11.5T320-702q12 0 23.5 3.5T366-687l200 143q16 11 25 28t9 37v279q0 33-23.5 56.5T520-120h-40q-33 0-56.5-23.5T400-200v-100q0-25-17.5-42.5T340-360h-40q-25 0-42.5 17.5T240-300v100q0 33-23.5 56.5T160-120h-40q-33 0-56.5-23.5T40-200v-279Zm880-281v560q0 33-23.5 56.5T840-120H720q-17 0-28.5-11.5T680-160v-359q0-20-8.5-37T647-584L438-734q-13-10-21-24t-8-28q0-25 16-39.5t43-14.5h372q33 0 56.5 23.5T920-760ZM700-600h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm0 160h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm0 160h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Z" />
  </svg>
)

export { IconHomeWorkRoundedFilled as default }
