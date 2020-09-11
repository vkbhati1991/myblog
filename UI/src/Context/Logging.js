import React, { useState } from "react";
import { LoggingContextProvider } from "./LoggingContext";
import { isLogging } from "../Authentication";

const Logging = ({ children }) => {

    const defaultState = isLogging();

    const [isLogin, setIsLogging] = useState(defaultState);

    return (
        <LoggingContextProvider value={{ isLogin, setIsLogging }}>
            {children}
        </LoggingContextProvider>
    );
};

export default Logging;