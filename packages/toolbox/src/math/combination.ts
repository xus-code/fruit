function combination<T, U extends unknown>(
  rawData: T[],
  num: number,
  handleOfCombine: (data: T[]) => U = (data) => data.join('-') as U
): U[] {
  if (num < 0) return []
  if (num === 1) return rawData.map((value) => handleOfCombine([value]))

  const res: U[] = []
  function generateCombination(rawData: T[], start: number, c: T[]): void {
    if (c.length === num) {
      res.push(handleOfCombine(c))
      return
    }
    for (let i = start; i < rawData.length; i++) {
      c.push(rawData[i])
      generateCombination(rawData, i + 1, c)
      c.pop()
    }
    return
  }
  generateCombination(rawData, 0, [])

  return res
}

export { combination }
