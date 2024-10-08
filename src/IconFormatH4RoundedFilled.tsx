import React from 'react'
import { IconProps } from './types'

const IconFormatH4RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-280q-17 0-28.5-11.5T100-320v-320q0-17 11.5-28.5T140-680q17 0 28.5 11.5T180-640v120h160v-120q0-17 11.5-28.5T380-680q17 0 28.5 11.5T420-640v320q0 17-11.5 28.5T380-280q-17 0-28.5-11.5T340-320v-120H180v120q0 17-11.5 28.5T140-280Zm600 0q-17 0-28.5-11.5T700-320v-80H540q-17 0-28.5-11.5T500-440v-200q0-17 11.5-28.5T540-680q17 0 28.5 11.5T580-640v160h120v-160q0-17 11.5-28.5T740-680q17 0 28.5 11.5T780-640v160h40q17 0 28.5 11.5T860-440q0 17-11.5 28.5T820-400h-40v80q0 17-11.5 28.5T740-280Z" />
  </svg>
)

export { IconFormatH4RoundedFilled as default }
