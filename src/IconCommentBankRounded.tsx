import React from 'react'
import { IconProps } from './types'

export const IconCommentBankRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm560-80v-480H700v245q0 12-10 17.5t-20-.5l-55-33q-8-5-15-5t-15 5l-55 33q-10 6-20 .5T500-555v-245H160v525l46-45h594Zm-640 0v-480 480Z" />
  </svg>
)
