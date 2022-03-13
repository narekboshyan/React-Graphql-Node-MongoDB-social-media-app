import { GraphQLList, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs//User";
import { Users } from "../../Entities/Users";

export const CREATE_USER = {
    type: new GraphQLList(UserType),
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any): Promise<any> {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
        return [args];
    },
};
