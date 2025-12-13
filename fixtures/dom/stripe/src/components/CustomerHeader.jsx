import React from 'react';
import { ChevronRightIcon, PlusIcon, MoreDotsIcon } from './Icons';

function Breadcrumbs() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <a
        href="#"
        style={{
          color: '#635bff',
          textDecoration: 'none',
          fontSize: '14px',
        }}
      >
        Customers
      </a>
      <span style={{ margin: '0 8px', color: '#697386' }}>
        <ChevronRightIcon width={8} height={8} />
      </span>
      <span style={{ color: '#1a1f36', fontSize: '14px' }}>
        elouisa@kentdisplays.com
      </span>
    </nav>
  );
}

function ActionButtons() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <a
        data-testid="customer_universal_action_button_create_payment_button_id"
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#fff',
          border: '1px solid #e3e8ee',
          borderRadius: '6px',
          color: '#1a1f36',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        <PlusIcon width={12} height={12} />
        <span style={{ marginLeft: '6px' }}>Create payment</span>
      </a>
      <a
        data-testid="create_invoice_button"
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#fff',
          border: '1px solid #e3e8ee',
          borderRadius: '6px',
          color: '#1a1f36',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        <PlusIcon width={12} height={12} />
        <span style={{ marginLeft: '6px' }}>Create invoice</span>
      </a>
      <a
        data-testid="overflow-menu"
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          backgroundColor: '#fff',
          border: '1px solid #e3e8ee',
          borderRadius: '6px',
          color: '#697386',
          textDecoration: 'none',
        }}
      >
        <MoreDotsIcon width={12} height={12} />
      </a>
    </div>
  );
}

export default function CustomerHeader({ customer }) {
  return (
    <div
      data-testid="bento-header"
      style={{
        padding: '24px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e3e8ee',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Breadcrumbs />
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 500,
                color: '#1a1f36',
                marginBottom: '4px',
              }}
            >
              {customer.email}
            </h1>
            <div style={{ color: '#697386', fontSize: '14px' }}>
              {customer.id}
            </div>
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
