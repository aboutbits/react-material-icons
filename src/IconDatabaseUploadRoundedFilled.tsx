import React from 'react'
import { IconProps } from './types'

export const IconDatabaseUploadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M441-221q2 27 8.5 52.5T467-120q-43-1-102.5-10t-114-28Q196-177 158-207t-38-73v-100q0 39 33.5 68t82 48Q284-245 340-234.5T441-221Zm66-200q-19 22-33 47t-22 53q-45-2-102.5-12T241-362q-51-19-86-48t-35-70v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-420q6 0 12.5-.5t14.5-.5Zm-27-99q-150 0-255-47T120-680q0-66 105-113t255-47q150 0 255 47t105 113q0 66-105 113t-255 47Zm220 236v144q0 8 6 14t14 6q8 0 14-6t6-14v-144l58 58q6 6 14 6t14-6q6-6 6-14t-6-14l-78-78q-12-12-28-12t-28 12l-78 78q-6 6-6 14t6 14q6 6 14 6t14-6l58-58Zm20 244q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
  </svg>
)
