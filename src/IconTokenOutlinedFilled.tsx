import React from 'react'
import { IconProps } from './types'

const IconTokenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M364-590 162-703l318-177 318 177-202 113q-23-24-53-37t-63-13q-33 0-63 13t-53 37Zm76 488L120-280v-355l205 115q-3 10-4 19.5t-1 20.5q0 55 33 98t87 57v223Zm40-298q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm40 298v-223q54-14 87-57t33-98q0-11-1-20.5t-4-19.5l205-115v355L520-102Z" />
  </svg>
)

export { IconTokenOutlinedFilled as default }
