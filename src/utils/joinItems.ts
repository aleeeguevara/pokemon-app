export const joinItems = (items: any, attr: string) =>
  items.reduce(
    (text: string, item: any, index: number) =>
      index === 0 ? item[attr].name : `${text}, ${item[attr].name}`,
    ""
  );
