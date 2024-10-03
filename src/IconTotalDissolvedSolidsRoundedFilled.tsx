import React from 'react'
import { IconProps } from './types.js'

export const IconTotalDissolvedSolidsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M233-488q-23 0-35.5-18.5T194-545q42-90 116.5-171T454-857q6-5 12.5-7.5T480-867q7 0 14 2.5t12 7.5q69 60 143.5 141T766-545q9 20-3.5 38.5T727-488H233Zm561 146q-9 49-31.5 92.5T705-171q-35 35-78.5 57T535-84l259-258Zm-163-66h114L421-84q-23-5-44.5-11.5T335-113l296-295Zm-229 0h114L267-159q-15-14-28.5-29T214-220l188-188Zm-116 0L176-298q-5-17-7-34.5t-2-34.5q0-18 13.5-29.5T213-408h73Z" />
  </svg>
)
