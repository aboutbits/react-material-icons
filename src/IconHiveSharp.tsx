import React from 'react'
import { IconProps } from './types'

export const IconHiveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m390-80-68-120H190l-90-160 68-120-68-120 90-160h132l68-120h180l68 120h132l90 160-68 120 68 120-90 160H638L570-80H390Zm248-440h86l44-80-44-80h-86l-45 80 45 80ZM438-400h84l45-80-45-80h-84l-45 80 45 80Zm0-240h84l46-81-45-79h-86l-45 79 46 81ZM237-520h85l45-80-45-80h-85l-45 80 45 80Zm0 240h85l45-80-45-80h-86l-44 80 45 80Zm200 120h86l45-79-46-81h-84l-46 81 45 79Zm201-120h85l45-80-45-80h-85l-45 80 45 80Z" />
  </svg>
)
