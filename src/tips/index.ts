import tips from './tips.json'

export type Tip = {
  id: number,
  content: string,
}

const tipsById: Map<number, Tip> = new Map()

tips.forEach(tip => {
  tipsById.set(tip.id, tip)
})

export function getRandomTip(): Tip {
  const randomIndex = Math.floor(Math.random() * tips.length)

  return tips[randomIndex]
}

export function getTip(tipId: number): Tip | undefined {
  return tipsById.get(tipId)
}
