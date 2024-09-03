import React from 'react'
import { IconProps } from './types'

const IconExposurePlus2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-120H120v-80h120v-120h80v120h120v80H320v120h-80Zm244 80v-84l200-204q33-35 46.5-58.5T744-600q0-29-22.5-52.5T654-676q-36 0-59.5 20T562-604l-80-32q14-45 58-84.5T656-760q83 0 129.5 47.5T832-600q0 45-21 82t-65 82L600-284l2 4h238v80H484Z" />
  </svg>
)

export { IconExposurePlus2SharpFilled as default }
