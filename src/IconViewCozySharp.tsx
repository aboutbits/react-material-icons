import React from 'react'
import { IconProps } from './types'

const IconViewCozySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-540v-300h300v300H120Zm80-80h140v-140H200v140Zm-80 500v-300h300v300H120Zm80-80h140v-140H200v140Zm340-340v-300h300v300H540Zm80-80h140v-140H620v140Zm-80 500v-300h300v300H540Zm80-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z" />
  </svg>
)

export { IconViewCozySharp as default }
