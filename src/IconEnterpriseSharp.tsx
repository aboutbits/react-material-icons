import React from 'react'
import { IconProps } from './types'

export const IconEnterpriseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-340q33 0 56.5-23.5T560-420q0-33-23.5-56.5T480-500q-33 0-56.5 23.5T400-420q0 33 23.5 56.5T480-340ZM80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
  </svg>
)
