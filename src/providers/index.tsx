import { ProviderProps } from '../ts/interfaces';
import { AgentsProvider } from './agents';
import { ModalProvider } from './modal';
import { PaginateProvider } from './paginate';
import { RolesProvider } from './roles';

const Providers = ({ children }: ProviderProps) => {
  return (
    <AgentsProvider>
      <RolesProvider>
        <ModalProvider>
          <PaginateProvider>{children}</PaginateProvider>
        </ModalProvider>
      </RolesProvider>
    </AgentsProvider>
  );
};

export default Providers;
