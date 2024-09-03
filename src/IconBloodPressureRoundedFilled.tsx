import React from 'react'
import { IconProps } from './types'

const IconBloodPressureRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M765-337q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l62-63ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM80-520v-200q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v184q0 17-16 25t-31-3q-34-23-72.5-34.5T680-560q-38 0-72.5 9.5T542-524l-66-134q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280-409l-45-89q-5-10-14.5-16t-20.5-6H80Zm80 360q-33 0-56.5-23.5T80-240v-200h95l69 138q5 11 14.5 16.5T280-280q11 0 20.5-5.5T315-302l125-248 38 76q-36 38-57 87.5T400-280q0 18 2.5 36.5T410-207q5 17-5.5 32T377-160H160Z" />
  </svg>
)

export { IconBloodPressureRoundedFilled as default }
