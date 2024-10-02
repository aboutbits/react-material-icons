import React from 'react'
import { IconProps } from './types'

export const IconSoapSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80H80v-441l385-250 65 65-78 126h348v80H480v60h400v80H480v60h360v80H480v60h280v80ZM630-640q-29 0-49.5-20.5T560-710q0-29 20.5-49.5T630-780q29 0 49.5 20.5T700-710q0 29-20.5 49.5T630-640Zm70-160q-25 0-42.5-17.5T640-860q0-25 17.5-42.5T700-920q25 0 42.5 17.5T760-860q0 25-17.5 42.5T700-800Zm140 160q-33 0-56.5-23.5T760-720q0-33 23.5-56.5T840-800q33 0 56.5 23.5T920-720q0 33-23.5 56.5T840-640Z" />
  </svg>
)
