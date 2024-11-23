import {auth} from "../config/firebaseInit.js"
export function authMiddleWare(ctx,next){
    ctx.user = auth.currentUser
    ctx.isAuthenticated = !!auth.currentUser;
    next()
}