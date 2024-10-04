import React from 'react'
import { IconProps } from './types'

const IconFoodBankRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Zm180-120q8 0 14-6t6-14v-140q25 0 42.5-17.5T500-460v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-20v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-20v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100q0 25 17.5 42.5T400-400v140q0 8 6 14t14 6Zm160 0q8 0 14-6t6-14v-294q0-11-7.5-18.5T574-580q-27 0-40.5 25T520-500v80q0 16 14.5 22.5T560-380v120q0 8 6 14t14 6Z" />
  </svg>
)

export { IconFoodBankRoundedFilled as default }
