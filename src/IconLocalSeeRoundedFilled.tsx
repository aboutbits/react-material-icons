import React from 'react'
import { IconProps } from './types'

const IconLocalSeeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-656-49 37q-6 5-12 .5t-4-11.5l19-61-52-41q-5-5-2.5-11.5t9.5-6.5h62l19-60q2-7 10-7t10 7l19 60h62q7 0 9.5 6.5T818-732l-52 41 19 61q2 7-4 11.5t-12-.5l-49-37ZM480-300q-42 0-71-29t-29-71q0-42 29-71t71-29h2q22 31 46.5 60t50.5 56q-5 36-33 60t-66 24ZM160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h126l50-54q10-11 20.5-16.5T378-798q12-2 20 7.5t6 22.5q-2 12-3 24t-1 24q0 38 10 74t27 71q-60 14-98.5 62.5T300-400q0 75 52.5 127.5T480-220q54 0 97.5-28.5T643-323l24 22q11 10 25 15t28 5q14 0 28-5t25-15q11-9 21-18l20-18q20-17 43-7.5t23 35.5v149q0 33-23.5 56.5T800-80H160Zm560-294q8 0 14.5-3t12.5-8q66-61 139.5-146T960-714q0-113-72.5-179.5T720-960q-95 0-167.5 66.5T480-714q0 98 73.5 183T693-385q6 5 12.5 8t14.5 3Z" />
  </svg>
)

export { IconLocalSeeRoundedFilled as default }
