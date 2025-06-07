import React from 'react'
import { IconProps } from './types.js'

export const IconHiveOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m651-500-68-120 68-120h134l68 120-68 120H651ZM413-360l-68-120 68-120h134l68 120-68 120H413Zm0-280-68-120 68-120h134l68 120-68 120H413ZM175-500l-68-120 68-120h134l65 120-65 120H175Zm0 280-68-120 68-120h134l65 120-65 120H175ZM417-80l-72-120 68-120h134l68 120-68 120H417Zm234-140-68-120 68-120h134l68 120-68 120H651Z" />
  </svg>
)
