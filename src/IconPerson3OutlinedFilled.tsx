import React from 'react'
import { IconProps } from './types'

const IconPerson3OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400q-50 0-85-35t-35-85q0-22 7-41.5t21-35.5q-4-10-6-21t-2-22q0-38 20.5-67.5T374-751q20-23 47-36t59-13q32 0 59 13t47 36q33 14 53.5 43.5T660-640q0 11-2 22t-6 21q14 16 21 35.5t7 41.5q0 50-35 85t-85 35H400ZM160-80v-112q0-34 17.5-62.5T224-298q62-31 126-46.5T480-360q66 0 130 15.5T736-298q29 15 46.5 43.5T800-192v112H160Z" />
  </svg>
)

export { IconPerson3OutlinedFilled as default }
