import React from 'react'
import { IconProps } from './types'

export const IconNoFlashOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 719-128q-4 20-20.5 34T660-80H140q-25 0-42.5-17.5T80-140v-384q0-25 17.5-42.5T140-584h106l8-9L27-820l57-57L876-85l-57 57ZM160-160h480v-47L537-310q-11 48-48.5 79T400-200q-58 0-99-41t-41-99q0-51 31-88.5t79-48.5l-27-27H160v344Zm240-120q25 0 42.5-17.5T460-340q0-25-17.5-42.5T400-400q-25 0-42.5 17.5T340-340q0 25 17.5 42.5T400-280Zm320-75-80-80v-69h-69L435-640h68l51 56h106q25 0 42.5 17.5T720-524v169Zm40-165v-160h-40v-200h160l-64 144h64L760-520Zm-120 85Zm-148 79Z" />
  </svg>
)
