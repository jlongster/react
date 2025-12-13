import React from 'react';
import { CopyIcon } from './Icons';

function DetailRow({ label, value, copyable }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '8px 0',
        borderBottom: '1px solid #e3e8ee',
      }}
    >
      <span style={{ color: '#697386', fontSize: '13px' }}>{label}</span>
      <span
        style={{
          color: '#1a1f36',
          fontSize: '13px',
          textAlign: 'right',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {value}
        {copyable && (
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fill: '#697386',
            }}
          >
            <CopyIcon width={12} height={12} />
          </button>
        )}
      </span>
    </div>
  );
}

export default function CustomerDetailsSummary({ customer, isSidebar }) {
  if (isSidebar) {
    return (
      <div
        style={{
          padding: '16px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          border: '1px solid #e3e8ee',
        }}
      >
        <h3
          style={{
            margin: '0 0 12px 0',
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a1f36',
          }}
        >
          Insights
        </h3>
        <div style={{ fontSize: '13px', color: '#697386' }}>
          No insights available for this customer.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #e3e8ee',
      }}
    >
      <h3
        style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: 600,
          color: '#1a1f36',
        }}
      >
        Details
      </h3>
      <div>
        <DetailRow label="ID" value={customer.id} copyable />
        <DetailRow label="Email" value={customer.email} copyable />
        <DetailRow label="Created" value={customer.created} />
        <DetailRow label="Balance" value={customer.balance} />
        <DetailRow label="Currency" value={customer.currency?.toUpperCase() || '—'} />
        <DetailRow label="Default payment method" value={customer.defaultPaymentMethod || '—'} />
        <DetailRow label="Invoice prefix" value={customer.invoicePrefix || '—'} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '8px 0',
            borderBottom: '1px solid #e3e8ee',
          }}
        >
          <span style={{ color: '#697386', fontSize: '13px' }}>Automatic tax</span>
          <span
            data-testid="automatic-tax-item"
            style={{
              color: '#1a1f36',
              fontSize: '13px',
            }}
          >
            Enabled
          </span>
        </div>
        <DetailRow label="Tax exempt" value={customer.taxExempt || 'None'} />
        <DetailRow label="Test clock" value={customer.testClock || 'None'} />
      </div>
    </div>
  );
}
