import React from 'react'
import { IconProps } from './types'

const IconScreenRecordSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M158-242q-37-50-57.5-110.5T80-480q0-67 20-127t57-110l58 57q-26 38-40.5 83.5T160-480q0 51 14.5 97t40.5 84l-57 57ZM480-80q-67 0-127-20t-110-57l57-58q38 26 83.5 40.5T480-160q51 0 96.5-14.5T660-215l57 58q-50 37-110 57T480-80Zm322-162-57-57q26-38 40.5-84t14.5-97q0-51-14.5-96.5T745-660l58-57q37 50 57 110t20 127q0 67-20.5 127.5T802-242ZM299-745l-57-57q50-37 110.5-57.5T480-880q68 0 128 20.5T718-802l-57 57q-38-26-84-40.5T480-800q-51 0-97 14.5T299-745Zm181 465q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z" />
  </svg>
)

export { IconScreenRecordSharp as default }
