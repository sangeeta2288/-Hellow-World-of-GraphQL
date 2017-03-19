
import {
 GraphQLSchema,
 GraphQLObjectType,
 GraphQLString,
 GraphQLInt,
 GraphQLList,
 GraphQLNonNull,
 GraphQLID,
 GraphQLBoolean,
 GraphQLFloat,
}from 'graphql';

const query = new GraphQLObjectType({
 name :"Query",
 description: "First graphql example!! Yay!!",

 fields:() => ({
  hello: {
   type: GraphQLString,
   description: "Accepts name and says HI to greet.",
   args:{
    name:{
     type: new GraphQLNonNull(GraphQLString),
     description:"The name for which you want to say HI:",
    }
   },
   resolve: (_,args) =>{
    return `Hello, ${args.name}!!`;
    }
  },
  luckyNumber: {
      type: GraphQLInt, 
      description: "A lucky number",
      resolve: () => {
        return 888;
      }
    },
  /*
  birth: {
      type: GraphQLString,
      description: "Birthday Month",
      
      args:{
      bmonth:{
       type: new GraphQLNonNull(GraphQLString),
       description:"The month for which you want to say HI:",
      },
      day:{
       type: new GraphQLNonNull(GraphQLString),
       description:"The name for which you want to say HI:",
      },
      year:{
       type: new GraphQLNonNull(GraphQLString),
       description:"The name for which you want to say HI:",
      },

      resolve: (_,args) =>{
       return `Date, ${args.bmonth}`; //,args.day,args.year}`;
       }
      }
      }*/
    }) 
});


/* create a GraphQL schema object that include the query object we just made in it, and then export the schema. */
const schema = new GraphQLSchema({
query
});
export default schema;
