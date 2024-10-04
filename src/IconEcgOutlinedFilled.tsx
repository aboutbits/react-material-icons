import React from 'react'
import { IconProps } from './types.js'

export const IconEcgOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-520v-200q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v254q-17-7-34.5-10.5T810-480q-23 0-46 6t-44 17q-9-5-19-9t-21-7v-47H545l-69-138q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280-410l-44-88q-5-11-15-16.5t-21-5.5H80Zm80 360q-33 0-56.5-23.5T80-240v-200h95l69 138q5 11 15 16.5t21 5.5q11 0 21-5.5t15-16.5l124-248 44 88q5 9 12.5 14.5T514-440q-34 26-54 65t-20 85q0 42 12.5 70.5T493-160H160Zm470-240q27 0 50 12t40 35q17-23 40-35t50-12q46 0 78 32t32 78q0 36-26 69.5T780-112l-60 52-60-52q-88-75-114-108.5T520-290q0-46 32-78t78-32Z" />
  </svg>
)