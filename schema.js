const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

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
      id: { type: GraphQLString },
      rname: { type: GraphQLString },
      ype: { type: GraphQLString }
    })
  })


const RootQuery=new GraphQLObjectType({
    name:'RootQueryType'
})


export default schema;