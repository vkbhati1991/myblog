import React from "react";

const loggingContext = React.createContext();

export default loggingContext;

export const LoggingContextProvider = loggingContext.Provider;