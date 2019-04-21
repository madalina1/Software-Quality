import Database from '../components/Database/Database';
import Table from '../components/Table/Table';
import NoMatch from '../components/NoMatch/NoMatch';
import Crud from '../components/crud/Crud';

export const routes = [
    {
      path: "/",
      component: Database,
      exact: 'exact'
    },
    {
      path: "/database",
      component: Database,
      exact: 'exact'
    },
    {
      path: "/:id",
      component: Table,
      exact: 'exact'
    },
    {
      path: "/:id/:id",
      component: Crud,
      exact: 'exact'
    },
    {
      component: NoMatch
    }
];