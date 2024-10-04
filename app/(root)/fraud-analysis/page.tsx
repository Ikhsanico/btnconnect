import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable';
import { Pagination } from '@/components/Pagination';
import { getAccount, getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'
import TransactionsChart from '@/components/TransactionsChart';
import RevenueChart from '@/components/RevenueChart';
import FraudCharts from '@/components/FraudCharts';


const FraudAnalysis = async ({ searchParams: { id, page }}:SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })


const rowsPerPage = 10;
const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

const indexOfLastTransaction = currentPage * rowsPerPage;
const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

const currentTransactions = account?.transactions.slice(
  indexOfFirstTransaction, indexOfLastTransaction
)
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Fraud Analysis with AI"
          subtext="Gain Insights and Track Your Payments with Fraud Detection."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">Plaid Checking</h2>
            <p className="text-14 text-blue-25">
              Plaid Gold Standard 0% Interest Checking
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {accounts.data.mask}
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">$110</p>
          </div>
        </div>

        <section className="flex w-full flex-row gap-6">
          <TransactionsChart/>
          <RevenueChart/>
          <FraudCharts/>
        </section>
      </div>
    </div>
  )
}

export default FraudAnalysis