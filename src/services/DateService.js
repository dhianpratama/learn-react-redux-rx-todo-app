import { DATE_FORMAT } from '../constants/Common';
import Moment from 'moment';

export const displayDate = (datetime) => {
  return Moment(datetime).format(DATE_FORMAT);
}
