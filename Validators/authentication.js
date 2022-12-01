const jwt =require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
module.exports = (context) =>{
    const key='Secret key'
    const Header = context.headers.authorization;


    if(Header){
        const token = Header.split('Bearer ')[1];


        if(token){
            try{
                const user = jwt.verify(token,key)
                return user;


            }catch(err){
                    throw new AuthenticationError('Invalid or Expired token');


            }
        }


        throw new AuthenticationError('Authentication token must be \'Bearer [token]');
    }


    throw new AuthenticationError('Authorization header must be provided');
};