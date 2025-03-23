import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi';
import { Route } from './Route';

export default function RouteSelect() {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title='Dashboard' />
      <Route Icon={FiUsers} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  )
}
