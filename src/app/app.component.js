import React from "react";

import env from '@env';

export default () => {
    console.log('env', env);
    return (
        <div className="container">                                     
            <div className="col-12">                                    
                <h1 className="text-center">Hello, World!</h1>  
            </div>                                                      
        </div>                                                          
    )
};