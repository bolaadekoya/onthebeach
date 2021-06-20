
const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export const sortArray = (arr, key, type, order) => {
    switch (type) {
        case "string":
            return arr.sort((a, b) => a[key].toString().localeCompare(b[key]));
        case "number":
            return arr.sort((a, b) => a.age - b.age)
        default:
            return;
    }
}

export const dateOrdinal = (day) => {
    if (day > 3 && day < 21) {
        return `${day}th`
    };
    switch (day % 10) {
        case 1:
            return `${day}st`;
        case 2:
            return `${day}nd`;
        case 3:
            return `${day}rd`;
        default:
            return `${day}th`;
    }
}

export const formatDate = (dateString) => {
    let d = new Date(dateString);

    let date = dateOrdinal(d.getDate());
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
}