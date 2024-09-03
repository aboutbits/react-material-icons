import React from 'react'
import { IconProps } from './types'

const IconDeployedCodeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-68 120-275v-410l360-207 360 207v410L480-68Zm-40-389v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z" />
  </svg>
)

export { IconDeployedCodeSharpFilled as default }
