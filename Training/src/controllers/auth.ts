import {  Request, Response } from "express"; 
import { accessToken } from "../middleware/auth";
import { services } from "../services"

  
 export default class Auth {
    static login = async (req: Request, res: Response) => {
        const token =  <String|null> (
         await accessToken(req)
        )
        const { email } = req.body;
        const staff = <Object|null> (
         await services.loginStaffWithEmailAndPassword(email)  
        ) 

        if(staff === false){
           return  res.status(404).json({msg:"Incorrect Email or Password "});
        }
        
       return  res.status(200).send({msg:"Login successfully ", data: staff, access_token: token});
    }
}
  
