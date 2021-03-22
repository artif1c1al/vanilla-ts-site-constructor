export const stringToHTML = (str: string): Element => {
  const parser = new DOMParser()
  const tag = parser.parseFromString(str, 'text/html')
  return tag.body
}
