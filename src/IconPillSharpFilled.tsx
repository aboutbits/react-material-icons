import React from 'react'
import { IconProps } from './types'

const IconPillSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m668-349 106-107q32-32 49-73t17-86q0-94-65.5-159.5T615-840q-45 0-86 17t-73 49L349-668l319 319ZM345-120q45 0 86-17t73-49l107-106-319-319-106 107q-32 32-49 73t-17 86q0 94 65.5 159.5T345-120Z" />
  </svg>
)

export { IconPillSharpFilled as default }
