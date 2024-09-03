import React from 'react'
import { IconProps } from './types'

const IconDigitalOutOfHomeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-40v-880h440v880h-80v-80H80v80H0Zm620 0v-264l86-82-21-104q-39 45-94.5 67.5T480-400v-80q48 0 93-23t74-70l30-49q15-25 44-34t55 2l184 78v196h-80v-143l-57-24 97 507h-82l-61-286-77 72v214h-80ZM160-440l140-80-140-80v160Zm520-240q-33 0-56.5-23.5T600-760q0-33 23.5-56.5T680-840q33 0 56.5 23.5T760-760q0 33-23.5 56.5T680-680Z" />
  </svg>
)

export { IconDigitalOutOfHomeSharpFilled as default }
