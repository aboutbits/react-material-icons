import React from 'react'
import { IconProps } from './types'

const IconSpaceBarOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360v-240h80v160h480v-160h80v240H160Z" />
  </svg>
)

export { IconSpaceBarOutlinedFilled as default }
