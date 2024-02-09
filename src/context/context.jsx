import { createContext, useContext, useMemo, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false)

  const contextValue = useMemo(() => {
    return { isToggle, setIsToggle };
  }, [isToggle, setIsToggle]);

  return (
    <DataContext.Provider value={contextValue}>
      { children }
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
