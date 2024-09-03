import React from 'react'
import { IconProps } from './types'

const IconDryOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M599-640q5-41-.5-64.5T569-758q-31-40-41.5-77t-3.5-85h76q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-77Zm161 0q5-41-1-64.5T729-758q-31-40-41-77t-3-85h75q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-76ZM240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l330-214 20 20q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H308l77-124-207 134q-9 5-13.5 14t-4.5 20v216q0 33 23.5 56.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm240-280v-80h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480Zm0 140v-80h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480ZM320-360Z" />
  </svg>
)

export { IconDryOutlined as default }
