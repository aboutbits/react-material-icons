import React from 'react'
import { IconProps } from './types'

const IconAlignVerticalCenterRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-120q-25 0-42.5-17.5T280-180v-260H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160v-260q0-25 17.5-42.5T340-840q25 0 42.5 17.5T400-780v260h160v-140q0-25 17.5-42.5T620-720q25 0 42.5 17.5T680-660v140h160q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H680v140q0 25-17.5 42.5T620-240q-25 0-42.5-17.5T560-300v-140H400v260q0 25-17.5 42.5T340-120Z" />
  </svg>
)

export { IconAlignVerticalCenterRoundedFilled as default }
