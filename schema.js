const { GraphQLObjectType,
   GraphQLInt, 
  GraphQLString,
  GraphQLList, 
  GraphQLSchema,
  GraphQLBoolean
} = require('graphql');
const axios=require('axios');
const BASE_URL='https://api.spacexdata.com/v3';
const LAUNCHES_URL=BASE_URL+'/launches';
const ROCKETES_URL=BASE_URL+'/rockets';

//请求的地址参考文档为https://docs.spacexdata.com/?version=latest
const LanuchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        id: { type: GraphQLString },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },

    })
})

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
      rocket_id: { type: GraphQLString },
      rocket_name: { type: GraphQLString },
      rocket_type: { type: GraphQLString }
    })
  })


const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
      lanuches:{
        type:new GraphQLList(LanuchType),
        resolve(parent,args){
          return axios.get(LAUNCHES_URL).then(res=>res.data)
        }
      },
      lanuch:{
        type:LanuchType,
        args:{
          flight_number:{type:GraphQLInt}
        },
        resolve(parent,args){
          console.log(args)
          return axios.get(LAUNCHES_URL+"/"+args.flight_number).then(
            res=>res.data
          )
        }
      },
      rockets:{
        type:new GraphQLList(RocketType),
        resolve(){
          return axios.get(ROCKETES_URL).then(res=>res.data)
        }
      },
      rocket:{
        type:RocketType,
        args:{
          rocket_id:{type:GraphQLString}
        },
        resolve(parent,args){
          return axios.get(ROCKETES_URL+"/"+args.rocket_id).then(res=>res.data)
        }
      }
    }
})


module.exports=new GraphQLSchema({
   query:RootQuery  
})