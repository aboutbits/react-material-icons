import React from 'react'
import { IconProps } from './types'

const IconTabRecentRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M740-248v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60ZM520-720v120q0 17 11.5 28.5T560-560h240v-160H520ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v196q0 18-15.5 27t-32.5 1q-27-12-55.5-18t-57.5-6q-116 0-197.5 82T440-240q0 9 .5 18t1.5 17q2 18-8.5 31.5T406-160H160Z" />
  </svg>
)

export { IconTabRecentRoundedFilled as default }
