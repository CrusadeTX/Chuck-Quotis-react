const buildQuery = (limit) =>{
    let apiLimit="";
   if(limit === undefined){
       limit="all";
   }
    switch(limit){
        case "nerdy": apiLimit ="?limitTo=[nerdy]";break;
        case "explicit": apiLimit ="?limitTo=[explicit]";break;
        case "all": apiLimit =""; break;
        default: apiLimit =""; break;
    }
    const query = "https://api.icndb.com/jokes/"+apiLimit;
    return query;
}
export default buildQuery;