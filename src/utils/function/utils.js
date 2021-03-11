function toDataString (date) {
  return date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' + date.getDate()
}

export {
  toDataString
}
