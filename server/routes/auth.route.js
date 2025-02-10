import { Router } from "express";

const auth_Router = Router()

auth_Router.post("/sign-up", "")
auth_Router.post("/login", "")
auth_Router.post("/logout", "")



export default auth_Router