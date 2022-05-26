import { ProviderProps } from '../ts/interfaces';
import { AgentsProvider } from './agents';
import { RolesProvider } from './roles';

const Providers = ({ children }: ProviderProps) => {
  return (
    <AgentsProvider>
      <RolesProvider>{children}</RolesProvider>
    </AgentsProvider>
  );
};

export default Providers;
