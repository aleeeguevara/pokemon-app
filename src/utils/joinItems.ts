export const joinItems = (items: any, attr: string) => {
  return items.reduce((text: string, item: any, index: number) => {
    if (index === 0) {
      return item[attr].name
    }

    return `${text}, ${item[attr].name}` 
  }, '')
};