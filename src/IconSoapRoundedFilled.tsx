import React from 'react'
import { IconProps } from './types'

const IconSoapRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l306-199q11-7 23-5.5t21 10.5q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H480v60h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480v60h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480v60h240q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm390-560q-29 0-49.5-20.5T560-710q0-29 20.5-49.5T630-780q29 0 49.5 20.5T700-710q0 29-20.5 49.5T630-640Zm70-160q-25 0-42.5-17.5T640-860q0-25 17.5-42.5T700-920q25 0 42.5 17.5T760-860q0 25-17.5 42.5T700-800Zm140 160q-33 0-56.5-23.5T760-720q0-33 23.5-56.5T840-800q33 0 56.5 23.5T920-720q0 33-23.5 56.5T840-640Z" />
  </svg>
)

export { IconSoapRoundedFilled as default }
