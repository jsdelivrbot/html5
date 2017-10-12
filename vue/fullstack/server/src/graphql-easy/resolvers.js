const list = [
    {id: '1', title: 'graphql is awesome', owner: 'Ben Doe'},
    {id: '2', title: 'Vue.js and apollo are so awesome', owner: 'John Doe'},
    {id: '3', title: 'the best phone for 2017 is Iphone X', owner: 'techcrunch'}
];

module.exports = {
    Query: {
        allList (root, args, context) {
            return list
        },
        listById (root, args, context) {
            const listItem = list.find((item) => {
                // find the item in a list
                if (item.id === args.id) {
                    return item;
                }
                throw new Error('item not found');
            });
            return listItem;
        }
    }
};
