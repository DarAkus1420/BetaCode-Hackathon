import Search from './model'

const save = async ({ id, query, response }) => {
    let data = { query, response };
    return Search.updateOne({_id: id}, data, {upsert: true, setDefaultsOnInsert: true});
};

export default {
    save
}