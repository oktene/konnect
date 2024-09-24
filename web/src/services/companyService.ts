import { apiClient } from './apiClient';
import { Company } from '@/src/zodSchemas/company';

export const companyService = {
  // Buscar todas as empresas
  async getAllCompanies(): Promise<Company[]> {
    const response = await apiClient.get('/company');
    return response.data;
  },

  // Buscar uma empresa por ID
  async getCompanyById(companyId: string): Promise<Company> {
    const response = await apiClient.get(`/company/${companyId}`);
    return response.data;
  },

  // Criar uma nova empresa
  async createCompany(data: Omit<Company, 'id'>): Promise<Company> {
    const response = await apiClient.post('/company', data);
    return response.data;
  },
};