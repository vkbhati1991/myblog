
import moment from 'moment';

const getDateAndTime = (dateFormate) => {
    return moment(dateFormate).format('lll');
};

export default getDateAndTime;