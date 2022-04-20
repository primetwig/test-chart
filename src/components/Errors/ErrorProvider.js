import { createContext, useCallback, useContext, useState } from 'react';

const ErrorContext = createContext({
  errors: [],
  showError: () => {},
});

const ERROR_DURATION = 5000;

function ErrorProvider({children}) {
  const [errors, setErrors] = useState([])

  const showError = useCallback(message => {
    setErrors(errors => [...errors, {message}])
    setTimeout(() => setErrors(errors => errors.slice(1)), ERROR_DURATION)
  }, [])

  const value = {errors, showError}

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  );
}

export const useErrors = () => useContext(ErrorContext);

export default ErrorProvider;
