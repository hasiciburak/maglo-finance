import { apiClient } from "./client";
import {
  ApiResponse,
  FinancialSummary,
  RecentTransactionsData,
  ScheduledTransfersData,
  WalletData,
  WorkingCapitalData,
} from "./types";

/**
 * Dashboard/Financial API endpoints
 */
export const dashboardApi = {
  /**
   * Get financial summary (total balance, expenses, savings)
   */
  getSummary: async (): Promise<ApiResponse<FinancialSummary>> => {
    const response = await apiClient.get<ApiResponse<FinancialSummary>>(
      "/financial/summary"
    );
    return response.data;
  },

  /**
   * Get working capital data (income/expense for last 6 months)
   */
  getWorkingCapital: async (): Promise<ApiResponse<WorkingCapitalData>> => {
    const response = await apiClient.get<ApiResponse<WorkingCapitalData>>(
      "/financial/working-capital"
    );
    return response.data;
  },

  /**
   * Get wallet cards (credit/debit cards)
   */
  getWallet: async (): Promise<ApiResponse<WalletData>> => {
    const response = await apiClient.get<ApiResponse<WalletData>>(
      "/financial/wallet"
    );
    return response.data;
  },

  /**
   * Get recent transactions
   * @param limit - Number of transactions to return (default: 20)
   */
  getRecentTransactions: async (
    limit?: number
  ): Promise<ApiResponse<RecentTransactionsData>> => {
    const params = limit ? { limit } : {};
    const response = await apiClient.get<ApiResponse<RecentTransactionsData>>(
      "/financial/transactions/recent",
      { params }
    );
    return response.data;
  },

  /**
   * Get scheduled transfers
   */
  getScheduledTransfers: async (): Promise<
    ApiResponse<ScheduledTransfersData>
  > => {
    const response = await apiClient.get<ApiResponse<ScheduledTransfersData>>(
      "/financial/transfers/scheduled"
    );
    return response.data;
  },
};
