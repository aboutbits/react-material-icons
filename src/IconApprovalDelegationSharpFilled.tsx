import React from 'react'
import { IconProps } from './types'

const IconApprovalDelegationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M517-518 347-688l57-56 113 113 227-226 56 56-283 283ZM40-80v-440h160v440H40Zm520 0-280-79v-361h79l321 120v80H520l-70-27-14 37 84 30h360v80L560-80Z" />
  </svg>
)

export { IconApprovalDelegationSharpFilled as default }
