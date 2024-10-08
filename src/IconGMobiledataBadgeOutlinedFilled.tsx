import React from 'react'
import { IconProps } from './types'

const IconGMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-160h160q33 0 56.5-23.5T640-360v-160H480v80h80v80H400v-240h240q0-33-23.5-56.5T560-680H400q-33 0-56.5 23.5T320-600v240q0 33 23.5 56.5T400-280Z" />
  </svg>
)

export { IconGMobiledataBadgeOutlinedFilled as default }
