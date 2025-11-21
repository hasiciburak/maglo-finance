/** API Response Types */

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
  error: string;
  code: string;
};

/** User Types */

export type User = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAt: string | null;
  lastLoginIP: string | null;
  createdAt: string;
  updatedAt: string;
};

/** Auth Types */

export type LoginResponse = {
  user: User;
  accessToken: string;
};

export type SignUpResponse = {
  user: User;
  accessToken: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  fullName: string;
  email: string;
  password: string;
};

/** Financial Types */

export type Currency = "TRY" | "USD" | "EUR";

export type Trend = "up" | "down";

export type Change = {
  percentage: number;
  trend: Trend;
};

export type AmountWithChange = {
  amount: number;
  currency: Currency;
  change: Change;
};

export type FinancialSummary = {
  totalBalance: AmountWithChange;
  totalExpense: AmountWithChange;
  totalSavings: AmountWithChange;
  lastUpdated: string;
};

export type WorkingCapitalMonth = {
  month: string;
  income: number;
  expense: number;
  net: number;
};

export type WorkingCapitalData = {
  period: string;
  currency: Currency;
  data: WorkingCapitalMonth[];
  summary: {
    totalIncome: number;
    totalExpense: number;
    netBalance: number;
  };
};

export type Card = {
  id: string;
  name: string;
  type: "credit" | "debit";
  cardNumber: string;
  bank: string;
  network: string;
  expiryMonth: number;
  expiryYear: number;
  color: string;
  isDefault: boolean;
};

export type WalletData = {
  cards: Card[];
};

export type Transaction = {
  id: string;
  name: string;
  business: string;
  image: string;
  type: string;
  amount: number;
  currency: Currency;
  date: string;
  status: string;
};

export type RecentTransactionsData = {
  transactions: Transaction[];
  summary: {
    totalIncome: number;
    totalExpense: number;
    count: number;
  };
};

export type ScheduledTransfer = {
  id: string;
  name: string;
  image: string;
  date: string;
  amount: number;
  currency: Currency;
  status: string;
};

export type ScheduledTransfersData = {
  transfers: ScheduledTransfer[];
  summary: {
    totalScheduledAmount: number;
    count: number;
  };
};
