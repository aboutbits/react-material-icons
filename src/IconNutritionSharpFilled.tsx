import React from 'react'
import { IconProps } from './types'

const IconNutritionSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-33-8-57.5-28.5T304-747q-15-29-21-63t-2-69q41-5 78 5t67 32q30 22 49.5 53t23.5 70q13-31 34.5-61.5T600-856l56 56q-43 43-63.5 73T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Z" />
  </svg>
)

export { IconNutritionSharpFilled as default }
