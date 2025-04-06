import {
  FiDatabase,
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiServer,
  FiUsers
} from 'react-icons/fi';

import { Route } from './Route';

export default function RouteSelect() {
  return (
    <>
      <div className="space-y-1 mb-4">
        <Route Icon={FiHome} selected={true} title='Dashboard' />
        <Route Icon={FiUsers} selected={false} title="Team" />
        <Route Icon={FiPaperclip} selected={false} title="Invoices" />
        <Route Icon={FiLink} selected={false} title="Integrations" />
        <Route Icon={FiDollarSign} selected={false} title="Finance" />
      </div>
      <div className='mb-4 space-y-1'>
        <h3 className='px-2 py-1.5'>Resources</h3>
        <Route Icon={FiUsers} selected={false} title='Users' />
        <Route Icon={FiServer} selected={false} title="Server" />
        <Route Icon={FiDatabase} selected={false} title="Database" />
      </div>
    </>
  )
}