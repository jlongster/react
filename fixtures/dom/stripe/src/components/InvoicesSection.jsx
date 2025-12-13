import React from 'react';
import { MoreDotsIcon } from './Icons';

function InvoiceRow({ invoice }) {
  return (
    <tr>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee' }}>
        <a
          href="#"
          style={{
            color: '#635bff',
            textDecoration: 'none',
            fontSize: '13px',
          }}
        >
          {invoice.number}
        </a>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#1a1f36' }}>
        {invoice.amount}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            backgroundColor: invoice.status === 'paid' ? '#d1fae5' : '#fef3c7',
            color: invoice.status === 'paid' ? '#065f46' : '#92400e',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {invoice.status}
        </span>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#697386' }}>
        {invoice.dueDate}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#697386' }}>
        {invoice.created}
      </td>
      <td
        data-testid="row-actions-header-cell"
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid #e3e8ee',
          width: '48px',
        }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            backgroundColor: '#fff',
            border: '1px solid #e3e8ee',
            borderRadius: '6px',
            cursor: 'pointer',
            fill: '#697386',
          }}
        >
          <MoreDotsIcon width={12} height={12} />
        </button>
      </td>
    </tr>
  );
}

export default function InvoicesSection({ invoices }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #e3e8ee',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderBottom: '1px solid #e3e8ee',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#1a1f36' }}>
          Invoices
        </h3>
      </div>
      {invoices.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead data-testid="inline-table-header">
            <tr style={{ backgroundColor: '#f6f8fa' }}>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                NUMBER
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                AMOUNT
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                STATUS
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                DUE DATE
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                CREATED
              </th>
              <th data-testid="row-actions-header-cell" style={{ padding: '8px 16px', width: '48px', borderBottom: '1px solid #e3e8ee' }} />
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {invoices.map(invoice => (
              <InvoiceRow key={invoice.id} invoice={invoice} />
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ padding: '40px', textAlign: 'center', color: '#697386', fontSize: '14px' }}>
          No invoices found for this customer.
        </div>
      )}
    </div>
  );
}
