import { create } from "zustand";
import {
  FinancialSummary,
  WorkingCapitalData,
  WalletData,
  RecentTransactionsData,
  ScheduledTransfersData,
} from "../lib/api/types";
import { dashboardApi } from "../lib/api/dashboard";

interface DashboardState {
  // Data
  summary: FinancialSummary | null;
  workingCapital: WorkingCapitalData | null;
  wallet: WalletData | null;
  recentTransactions: RecentTransactionsData | null;
  scheduledTransfers: ScheduledTransfersData | null;

  // Loading states
  isLoadingSummary: boolean;
  isLoadingWorkingCapital: boolean;
  isLoadingWallet: boolean;
  isLoadingRecentTransactions: boolean;
  isLoadingScheduledTransfers: boolean;

  // Error states
  summaryError: string | null;
  workingCapitalError: string | null;
  walletError: string | null;
  recentTransactionsError: string | null;
  scheduledTransfersError: string | null;

  // Actions
  fetchSummary: () => Promise<void>;
  fetchWorkingCapital: () => Promise<void>;
  fetchWallet: () => Promise<void>;
  fetchRecentTransactions: (limit?: number) => Promise<void>;
  fetchScheduledTransfers: () => Promise<void>;
  resetDashboard: () => void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  // Initial state
  summary: null,
  workingCapital: null,
  wallet: null,
  recentTransactions: null,
  scheduledTransfers: null,

  isLoadingSummary: false,
  isLoadingWorkingCapital: false,
  isLoadingWallet: false,
  isLoadingRecentTransactions: false,
  isLoadingScheduledTransfers: false,

  summaryError: null,
  workingCapitalError: null,
  walletError: null,
  recentTransactionsError: null,
  scheduledTransfersError: null,

  // Fetch financial summary
  fetchSummary: async () => {
    set({ isLoadingSummary: true, summaryError: null });
    try {
      const response = await dashboardApi.getSummary();
      set({ summary: response.data, isLoadingSummary: false });
    } catch (error: any) {
      set({
        summaryError: error.message || "Failed to fetch financial summary",
        isLoadingSummary: false,
      });
    }
  },

  // Fetch working capital data
  fetchWorkingCapital: async () => {
    set({ isLoadingWorkingCapital: true, workingCapitalError: null });
    try {
      const response = await dashboardApi.getWorkingCapital();
      set({ workingCapital: response.data, isLoadingWorkingCapital: false });
    } catch (error: any) {
      set({
        workingCapitalError:
          error.message || "Failed to fetch working capital data",
        isLoadingWorkingCapital: false,
      });
    }
  },

  // Fetch wallet cards
  fetchWallet: async () => {
    set({ isLoadingWallet: true, walletError: null });
    try {
      const response = await dashboardApi.getWallet();
      set({ wallet: response.data, isLoadingWallet: false });
    } catch (error: any) {
      set({
        walletError: error.message || "Failed to fetch wallet data",
        isLoadingWallet: false,
      });
    }
  },

  // Fetch recent transactions
  fetchRecentTransactions: async (limit?: number) => {
    set({ isLoadingRecentTransactions: true, recentTransactionsError: null });
    try {
      const response = await dashboardApi.getRecentTransactions(limit);
      set({
        recentTransactions: response.data,
        isLoadingRecentTransactions: false,
      });
    } catch (error: any) {
      set({
        recentTransactionsError:
          error.message || "Failed to fetch recent transactions",
        isLoadingRecentTransactions: false,
      });
    }
  },

  // Fetch scheduled transfers
  fetchScheduledTransfers: async () => {
    set({
      isLoadingScheduledTransfers: true,
      scheduledTransfersError: null,
    });
    try {
      const response = await dashboardApi.getScheduledTransfers();
      set({
        scheduledTransfers: response.data,
        isLoadingScheduledTransfers: false,
      });
    } catch (error: any) {
      set({
        scheduledTransfersError:
          error.message || "Failed to fetch scheduled transfers",
        isLoadingScheduledTransfers: false,
      });
    }
  },

  // Reset all dashboard data
  resetDashboard: () => {
    set({
      summary: null,
      workingCapital: null,
      wallet: null,
      recentTransactions: null,
      scheduledTransfers: null,
      summaryError: null,
      workingCapitalError: null,
      walletError: null,
      recentTransactionsError: null,
      scheduledTransfersError: null,
    });
  },
}));

