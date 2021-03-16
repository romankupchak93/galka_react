// users hardcoded for simplicity, store in a db for production applications
const skills = [{
    id: 1,
    name: 'JavaScript'
}, {
    id: 2,
    name: 'React'
}];

module.exports = {
    getAll
};

async function getAll() {
    return skills;
}
