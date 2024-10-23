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
    path: "/telegram-cabinet",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/total_balance",
        element: <BalancePage />
      },
      {
        path: "/total_balance/:id",
        element: <WithdrawPage />,
        error: <Root />
      },
      {
        path: "/last_transactions",
        element: <LastTransactions />
      },
      {
        path: "my_projects",
        element: <ProjectsPage />
      },
      {
        path: "/my_projects*",
        element: <EditingProjectPage />
      },
      {
        path: "/invoice",
        element: <InvoicePage />
      },
      {
        path: "/support",
        element: <SupportPage />
      },
      {
        path: "/cashflow",
        element: <CashflowPage />
      }
      ,
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
