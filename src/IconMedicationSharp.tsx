import React from 'react'
import { IconProps } from './types'

const IconMedicationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-260h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM200-120v-600h560v600H200Zm80-80h400v-440H280v440Zm-40-560v-80h480v80H240Zm40 120v440-440Z" />
  </svg>
)

export { IconMedicationSharp as default }
