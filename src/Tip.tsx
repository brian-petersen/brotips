import { useLoaderData } from 'react-router-dom'

import { Tip as TipType } from './tips'

export default function Tip() {
  const tip = useLoaderData() as TipType | null

  return (
    <p>{tip?.content}</p>
  )
}
