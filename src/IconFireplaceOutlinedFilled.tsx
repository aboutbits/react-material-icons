import React from 'react'
import { IconProps } from './types'

const IconFireplaceOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M424-282q13 11 27.5 15.5T480-262q29 0 52.5-18.5T560-334q5-47-29-69.5T480-462q-5 14-5 26t3 26q3 17 7 32t1 32q-5 18-22 37t-40 27ZM80-80v-800h800v800H80Zm80-80h80v-80h90q-23-29-36.5-61T280-362q0-46 10-86.5t36.5-78.5q26.5-38 73.5-75.5T520-680q-11 44 9.5 93.5T606-496q33 24 53.5 56.5T680-360q0 35-11 64.5T640-240h80v80h80v-640H160v640Z" />
  </svg>
)

export { IconFireplaceOutlinedFilled as default }
