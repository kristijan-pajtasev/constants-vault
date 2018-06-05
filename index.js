let vault = {};

module.exports = {
    addGroup: (name, values) => {
        vault[name] = values;
    },
    addToGroup: (groupName, key, value) => {
        if(!vault[groupName]) vault[groupName] = {};
        vault[groupName][key] = value;
    },
    getGroup: (groupName) => vault[groupName],
    getGroupEntry: (groupName, key) => {
        if(!vault[groupName]) throw new Error(`Group ${groupName} doesn't exist`);
        else return vault[groupName][key];
    }
};