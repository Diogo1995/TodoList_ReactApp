import React from "react";

import env from '@env';

export default () =>
    console.log({env}) || 
    (
    <div>
        <h1>Hello, world!</h1>
    </div>
);