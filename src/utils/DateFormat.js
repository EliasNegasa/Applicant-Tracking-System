import dayjs from 'dayjs'

const DMYFormat = (date) => {
  return dayjs(date).format('DD-MM-YYYY')
}

const MDYhmFormat = (date) => {
  return dayjs(date).format('MMM D, YYYY h:mm A')
}

export { DMYFormat, MDYhmFormat }
