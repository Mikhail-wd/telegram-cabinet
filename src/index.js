import React from 'react';
import ReactDOM from 'react-dom/client';
import BalancePage from './pages/balancePage/BalancePage';
import LastTransactions from './pages/lastActivetyPage/LastTransactionsPage';
import WithdrawPage from './pages/withdrawPage/WithdrawPage';
import InvoicePage from './pages/invoicePage/InvoicePage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import SupportPage from './pages/supportPage/SupportPage';
import EditingProjectPage from './pages/editingProjectPage/EditingProjectPage';
import CashflowPage from './pages/cashflowPage/CashflowPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import MainPage from './pages/mainPage/MainPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "telegram-cabinet/",
    element: <Root />,
    children: [
      {
        path: "telegram-cabinet/",
        element: <MainPage />
      },
      {
        path: "telegram-cabinet/total_balance",
        element: <BalancePage />
      },
      {
        path: "telegram-cabinet/total_balance/:id",
        element: <WithdrawPage />,
        error: <Root />
      },
      {
        path: "telegram-cabinet/last_transactions",
        element: <LastTransactions />
      },
      {
        path: "telegram-cabinet/my_projects",
        element: <ProjectsPage />
      },
      {
        path: "telegram-cabinet/my_projects/*",
        element: <EditingProjectPage />
      },
      {
        path: "telegram-cabinet/invoice",
        element: <InvoicePage />
      },
      {
        path: "telegram-cabinet/support",
        element: <SupportPage />
      },
      {
        path: "telegram-cabinet/cashflow",
        element: <CashflowPage />
      }
      ,
      {
        path: "telegram-cabinet/profile",
        element: <ProfilePage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
