import React from 'react'
import { IconProps } from './types'

const IconWbShadeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M780-160 560-380v-52q0-14 12-19t22 5l252 252q10 10 5 22t-19 12h-52Zm-220-40v-80l120 120h-80q-17 0-28.5-11.5T560-200Zm-400 0v-360h-32q-14 0-19-12t5-22l178-178q12-12 28-12t28 12l178 178q10 10 5 22t-19 12h-32v360q0 17-11.5 28.5T440-160H200q-17 0-28.5-11.5T160-200Zm120-200h80v-160h-80v160Z" />
  </svg>
)

export { IconWbShadeRounded as default }
