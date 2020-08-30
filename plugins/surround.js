export default function ({ app }, inject) {
  function surround (data, slug, { before = 1, after = 1 } = {}) {
    const index = data.findIndex(item => item.slug === slug)
    const slice = new Array(before + after).fill(null, 0)
    if (index === -1) {
      return slice
    }

    const prevSlice = data.slice(index - before, index)
    const nextSlice = data.slice(index + 1, index + 1 + after)

    let prevIndex = 0
    for (let i = before - 1; i >= 0; i--) {
      slice[i] = prevSlice[prevIndex] || null
      prevIndex++
    }

    let nextIndex = 0
    for (let i = before; i <= after; i++) {
      slice[i] = nextSlice[nextIndex] || null
      nextIndex++
    }

    return slice
  }
  inject('surround', (data, slug) => surround(data, slug))
}