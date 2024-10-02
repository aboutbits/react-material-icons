import React from 'react'
import { IconProps } from './types'

export const IconMediaLinkSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m300-180 160-100-160-100v200Zm220-470h160v-60H520v60ZM40-40v-480h640v480H40Zm700-360v-176q27-16 43.5-43.5T800-680q0-50-35-85t-85-35h-50v60h50q25 0 42.5 17.5T740-680q0 25-17.5 42.5T680-620h-50v40h-60v-40h-50q-25 0-42.5-17.5T460-680q0-25 17.5-42.5T520-740h50v-60h-50q-50 0-85 35t-35 85q0 32 15 57.5t39 42.5H280v-340h640v520H740Z" />
  </svg>
)
