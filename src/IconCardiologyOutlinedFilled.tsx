import React from 'react'
import { IconProps } from './types.js'

export const IconCardiologyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m428-451-34-51q-5-8-14-13t-19-5H99q-11-26-15-50t-4-50q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 26-4 50t-15 50H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162Zm52 345-58-52q-105-94-172-161T145-440h192l69 102q6 9 15.5 13.5T442-320q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h215q-38 54-105 121T538-158l-58 52Z" />
  </svg>
)