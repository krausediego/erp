import { AuthProvider } from '@/presentation/contexts';
import { NewMateriaPrimaPage } from '@/presentation/pages/MateriaPrima';

export const NewMateriaPrimaPageFactory = () => {
  return (
    <AuthProvider>
      <NewMateriaPrimaPage />
    </AuthProvider>
  );
};
