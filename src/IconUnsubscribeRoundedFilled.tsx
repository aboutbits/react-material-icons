import React from 'react'
import { IconProps } from './types'

const IconUnsubscribeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-520 212-688q-17-11-34.5-1T160-659q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l283-177q8-5 12-12.5t4-16.5q0-20-17.5-30t-34.5 1L480-520ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM660-220h200q8 0 14-6t6-14q0-8-6-14t-14-6H660q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-500 60q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v178q0 18-15 28t-32 4q-18-5-36-7.5t-37-2.5q-117 0-198.5 81.5T480-240q0 9 .5 18t1.5 17q2 18-8.5 31.5T446-160H160Z" />
  </svg>
)

export { IconUnsubscribeRoundedFilled as default }
