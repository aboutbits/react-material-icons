import React from 'react'
import { IconProps } from './types'

export const IconWindPowerOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-40q0-33 23.5-56.5T480-120v-229q9 4 19 6t21 2q42 0 70.5-28.5T619-440v-9l128 31q16 4 29 14t21 24l91 164q15 27 11 57t-26 52q-27 27-64.5 27T744-107L560-291v171q33 0 56.5 23.5T640-40H400Zm-280-80v-80h200v80H120Zm166-170-180-51q-29-8-47.5-32.5T40-429q0-38 26.5-64.5T131-520h330q-19 14-29.5 34.5T421-440q0 23 9 42t25 33l-105 67q-14 8-30.5 10.5T286-290Zm234-90q-25 0-42.5-17.5T460-440q0-25 17.5-42.5T520-500q25 0 42.5 17.5T580-440q0 25-17.5 42.5T520-380Zm92-98q-11-27-35.5-44T520-539q-11 0-21 2t-19 6v-158q0-17 6.5-32t18.5-26l137-128q23-22 53.5-25t56.5 13q32 20 41.5 56.5T783-762L612-478ZM40-600v-80h200v80H40Zm120-160v-80h240v80H160Z" />
  </svg>
)
