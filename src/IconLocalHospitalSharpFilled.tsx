import React from 'react'
import { IconProps } from './types'

const IconLocalHospitalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-280h120v-140h140v-120H540v-140H420v140H280v120h140v140ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconLocalHospitalSharpFilled as default }
