import React from 'react'
import { IconProps } from './types.js'

export const IconAdminMedsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M328-329q29 29 68.5 29.5T465-328l56-56-137-137-56 56q-29 29-29 68t29 68Zm304-302q-29-28-68.5-29T495-632l-55 55 137 137 55-55q29-29 28.5-68T632-631ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z" />
  </svg>
)
