const CheckDate = (date) => {
  const now = Date.now()
  const _date = new Date(date)
  if (_date > now) {
    return true
  } else if (_date < now) {
    return false
  }
}

export { CheckDate }
