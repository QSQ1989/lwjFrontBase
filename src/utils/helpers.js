/**
 * 通过制定的字段来寻找集合中值符合要求的记录
 * 使用的强等来进行判断
 * @param collection
 * @param field
 * @param value
 */
export const getByField = (collection, field, value) => {
  let temp = {};
  for (const item of collection) {
    if (item[field] === value) {
      temp = item
      break
    }
  }

  return temp
}
