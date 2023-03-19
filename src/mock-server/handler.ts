import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw'
import { POSTS, USERS } from "../api/urls";
import { users } from "./data";



export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
    rest.get(USERS, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(users)
        )
    }),
    rest.get(POSTS, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(users[0])
        )
    })
]