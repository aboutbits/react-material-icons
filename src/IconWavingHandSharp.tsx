import React from 'react'
import { IconProps } from './types.js'

export const IconWavingHandSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m430-500 311-311 56 56-310 311-57-56Zm99 99 283-284 57 57-283 283-57-56ZM211-211q-91-91-91-219t91-219l120-120 59 59q7 7 12 14.5t10 15.5l177-178 57 57-202 202-85 84 19 19q46 46 44 110t-49 111l-57-56q23-23 25.5-54.5T321-440l-76-74 86-85q12-12 12-28.5T331-656l-64 64q-68 68-68 162.5T267-267q68 68 163 68t163-68l268-269 57 57-269 268q-91 91-219 91t-219-91Zm219-219ZM680-39v-81q66 0 113-47t47-113h81q0 100-70.5 170.5T680-39ZM39-680q0-100 70.5-170.5T280-921v81q-66 0-113 47t-47 113H39Z" />
  </svg>
)
