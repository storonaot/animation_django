import moment from 'moment'

moment.locale('ru')

export default (date, format) => moment(Number(new Date(date))).format(format)
