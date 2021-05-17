export const shortTitle = (title: string, limit: number) => {
  return title?.length > limit ? title.slice(0, limit) : title;
};

export const getGenre = (
  idArr: number[],
  genreArr: Array<{ id: number; name: string }>
) => {
  let arr: string = "";
  idArr?.map((id) => {
    for (let i = 0; i < genreArr.length; i++) {
      if (genreArr[i].id === id) {
        arr += ` ${genreArr[i].name}`;
      }
    }
  });
  return arr;
};
