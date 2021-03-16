const config = require('config.json');
const jwt = require('jsonwebtoken');
// const hasher = require('../_helpers/hasher');

// users hardcoded for simplicity, store in a db for production applications
// {
//     rowNumber: 1,
//     turnId: 26346,
//     familyMemberId: 1761867,
//     fullName: "Амбріс Олег Олексійович",
//     birthday: "17.06.2000",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001213",
//     publicCardNumber: "01****1001213",
//     validityDate: "",
//     email: "greklux@gmail.com"
// }, {
//     rowNumber: 2,
//     turnId: 26344,
//     familyMemberId: 1761865,
//     fullName: "Амбріс Оксана Михайлівна",
//     birthday: "17.10.1978",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001212",
//     publicCardNumber: "01****1001212",
//     validityDate: "",
//     email: "ambrisoksana@gmail.com"
// }, {
//     rowNumber: 3,
//     turnId: 26332,
//     familyMemberId: 1761863,
//     fullName: "Микитюк Ольга Сергіївна",
//     birthday: "01.03.2005",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001211",
//     publicCardNumber: "02****0001211",
//     validityDate: "01.08.2024",
//     email: "mykolg2005@gmail.com"
// }, {
//     rowNumber: 4,
//     turnId: 26343,
//     familyMemberId: 1761861,
//     fullName: "Трефянчин Ярослав Васильович",
//     birthday: "28.07.1962",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001210",
//     publicCardNumber: "01****1001210",
//     validityDate: "",
//     email: "y.trefiyanchin@gmail.com"
// }, {
//     rowNumber: 5,
//     turnId: 26311,
//     familyMemberId: 1761859,
//     fullName: "Сапіна Катерина Миколаївна",
//     birthday: "31.07.2001",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001209",
//     publicCardNumber: "02****0001209",
//     validityDate: "30.06.2022",
//     email: "katedicaprio320@gmail.com"
// }, {
//     rowNumber: 6,
//     turnId: 24243,
//     familyMemberId: 1760147,
//     fullName: "Смірнова Катерина Любомирівна",
//     birthday: "06.04.1998",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011000755",
//     publicCardNumber: "01****1000755",
//     validityDate: "31.12.2025",
//     email: "scautkatja@gmail.com"
// }, {
//     rowNumber: 7,
//     turnId: 24243,
//     familyMemberId: 1760760,
//     fullName: "Смірнова Катерина Любомирівна",
//     birthday: "06.04.1998",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011000755",
//     publicCardNumber: "01****1000755",
//     validityDate: "31.12.2025",
//     email: "scautkatja@gmail.com"
// }, {
//     rowNumber: 8,
//     turnId: 24243,
//     familyMemberId: 1760989,
//     fullName: "Смірнова Катерина Любомирівна",
//     birthday: "06.04.1998",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011000755",
//     publicCardNumber: "01****1000755",
//     validityDate: "31.12.2025",
//     email: "scautkatja@gmail.com"
// }, {
//     rowNumber: 9,
//     turnId: 24243,
//     familyMemberId: 1760991,
//     fullName: "Смірнова Катерина Любомирівна",
//     birthday: "06.04.1998",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011000755",
//     publicCardNumber: "01****1000755",
//     validityDate: "31.12.2025",
//     email: "scautkatja@gmail.com"
// }, {
//     rowNumber: 10,
//     turnId: 24243,
//     familyMemberId: 1760992,
//     fullName: "Смірнова Катерина Любомирівна",
//     birthday: "06.04.1998",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011000755",
//     publicCardNumber: "01****1000755",
//     validityDate: "31.12.2025",
//     email: "scautkatja@gmail.com"
// }, {
//     rowNumber: 11,
//     turnId: 26342,
//     familyMemberId: 1761857,
//     fullName: "Кудибін Уляна Андріївна",
//     birthday: "29.07.1997",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001208",
//     publicCardNumber: "01****1001208",
//     validityDate: "",
//     email: "ulianakudybin@gmail.com"
// }, {
//     rowNumber: 12,
//     turnId: 26338,
//     familyMemberId: 1761855,
//     fullName: "Савіцька Соломія Олегівна",
//     birthday: "03.10.2002",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001207",
//     publicCardNumber: "02****0001207",
//     validityDate: "30.06.2023",
//     email: "solomiasavitska2002@gmail.com"
// }, {
//     rowNumber: 13,
//     turnId: 26340,
//     familyMemberId: 1761853,
//     fullName: "Гончарик Вікторія Вікторівна",
//     birthday: "20.07.2005",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001206",
//     publicCardNumber: "02****0001206",
//     validityDate: "30.06.2024",
//     email: "honcharuk31@icloud.com"
// }, {
//     rowNumber: 14,
//     turnId: 26337,
//     familyMemberId: 1761851,
//     fullName: "Присяжнюк Юлія Яремівна",
//     birthday: 01.01.1979,
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001205",
//     publicCardNumber: "01****1001205",
//     validityDate: "",
//     email: "yuliia.prysiazhniuk@gmail.com"
// }, {
//     rowNumber: 15,
//     turnId: 26329,
//     familyMemberId: 1761849,
//     fullName: "Мурмилюк Анжела Василівна",
//     birthday: "15.11.2003",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001204",
//     publicCardNumber: "02****0001204",
//     validityDate: "30.06.2022",
//     email: "murmylick@gmail.com"
// }, {
//     rowNumber: 16,
//     turnId: 26335,
//     familyMemberId: 1761847,
//     fullName: "Бойчук Володимир Ярославович",
//     birthday: "26.02.1989",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001203",
//     publicCardNumber: "01****1001203",
//     validityDate: "",
//     email: "boychuk.vl@gmail.com"
// }, {
//     rowNumber: 17,
//     turnId: 26341,
//     familyMemberId: 1761845,
//     fullName: "Вагилевич Василь Вікторович",
//     birthday: "30.01.2000",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001202",
//     publicCardNumber: "02****0001202",
//     validityDate: "30.06.2022",
//     email: "vagilevich7@gmail.com"
// }, {
//     rowNumber: 18,
//     turnId: 26324,
//     familyMemberId: 1761822,
//     fullName: "Гончар Вероніка Віталіївна",
//     birthday: "20.01.2002",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001200",
//     publicCardNumber: "02****0001200",
//     validityDate: "30.06.2023",
//     email: "goncharveronika6@gmail.com"
// }, {
//     rowNumber: 19,
//     turnId: 26336,
//     familyMemberId: 1761820,
//     fullName: "Бхарті Уджала ",
//     birthday: "14.02.2000",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001199",
//     publicCardNumber: "02****0001199",
//     validityDate: "30.06.2025",
//     email: "ujalabharti99@gmail.com"
// }, {
//     rowNumber: 20,
//     turnId: 26330,
//     familyMemberId: 1761818,
//     fullName: "Мурмилюк Христина Василівна",
//     birthday: "29.12.2004",
//     cardTypeName: "Студентська",
//     privateCardNumber: "020001198",
//     publicCardNumber: "02****0001198",
//     validityDate: "30.06.2024",
//     email: "murmylick@gmail.com"
// }
// const users = [{
//     id: 1,
//     username: 'test',
//     password: '4988a5925332f2f5b81794fb486d6c2d4fa5caed9c18ef7035fc524a0bc2fbd615579c56cbee1a598419f92b1b3975eb0440d987bbe8bac9e755786e97e07706',
//     firstName: 'Test',
//     lastName: 'User'
// }, {
//     id: 2,
//     username: 'test2',
//     password: '26590e9537353253a6b4ca782ff00db43992b7817186a257f24d7581e832195142fea8f680ffb3ffbebf1e6454780ba2e2ad008afe96016f5a76b3ab8260240e',
//     firstName: 'Test2',
//     lastName: 'User2'
// }];
// const users = [
// {
//     rowNumber: 1,
//     password: 26346,
//     id: 1761867,
//     fullName: "Амбріс Олег Олексійович",
//     birthday: "17.06.2000",
//     cardTypeName: "Загальна",
//     privateCardNumber: "011001213",
//     publicCardNumber: "01****1001213",
//     validityDate: "",
//     username: "test@gmail.com"
// }
const users = [{
    id: 1,
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'User'
}, {
    rowNumber: 1,
    password: "test2",
    id: 1761867,
    fullName: "Амбріс Олег Олексійович",
    birthday: "17.06.2000",
    cardTypeName: "Загальна",
    privateCardNumber: "011001213",
    publicCardNumber: "01****1001213",
    validityDate: "",
    username: "test2"
}];
module.exports = {
    authenticate,
    getAll,
    getOne
};

async function authenticate({ username, password }) {
    const user = users.find(u => {
        // const passwordHash = hasher(password, config.salt);
        return (u.username === username && u.password === password);
    });

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret);

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

async function getOne({ id }) {
    const user = users.find(u => {
        return (u.id === parseInt(id));
    });
    if (!user) throw 'User not found';
    return omitPassword(user);
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
