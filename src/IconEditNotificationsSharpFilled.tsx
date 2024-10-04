import React from 'react'
import { IconProps } from './types'

const IconEditNotificationsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q11 3 21.5 6.5T582-777L400-596v236h236l84-84v164h80v80H160Zm320-240v-123l263-262 123 122-263 263H480Zm263-224 37-39-37-37-38 38 38 38Z" />
  </svg>
)

export { IconEditNotificationsSharpFilled as default }
