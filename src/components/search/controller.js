import Search from './repository'

const save = async (data) => {
    let { query, response } = data;

    if(!query){
        return '[query] This field is required'
    }

    if(!response){
        return '[response] This field is required'
    }

    return await Search.save({ query, response });
};

export default {
    save
}