import React from 'react'
import { IconProps } from './types.js'

export const IconGondolaLiftOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-240q0-66 47-113t113-47h160v-109L40-600v-80l205-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T300-820q23 0 40 15t19 38l81-22v-51h80v29l86-23q-3-6-4.5-12.5T600-860q0-25 17.5-42.5T660-920q23 0 40.5 16t19.5 39l200-55v80L520-731v131h160q66 0 113 47t47 113v240q0 33-23.5 56.5T760-120H200Zm0-240h133v-160h-53q-33 0-56.5 23.5T200-440v80Zm213 0h133v-160H413v160Zm214 0h133v-80q0-33-23.5-56.5T680-520h-53v160Z" />
  </svg>
)