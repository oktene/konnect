import { useIsFetching } from '@tanstack/react-query';

const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching();

  return isFetching ? <div>Carregando dados...</div> : null;
};

export default GlobalLoadingIndicator;