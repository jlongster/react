import React from 'react';
import { MoreDotsIcon } from './Icons';

function PaymentRow({ payment }) {
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
          {payment.amount}
        </a>
        <span style={{ color: '#697386', fontSize: '13px', marginLeft: '8px' }}>
          USD
        </span>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            backgroundColor: payment.status === 'succeeded' ? '#d1fae5' : '#fee2e2',
            color: payment.status === 'succeeded' ? '#065f46' : '#991b1b',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {payment.status}
        </span>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#1a1f36' }}>
        {payment.description}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#697386' }}>
        {payment.paymentMethod}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#697386' }}>
        {payment.created}
      </td>
      <td
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

export default function PaymentsSection({ payments }) {
  return (
    <div
      data-testid="customer-payments"
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
          Payments
        </h3>
      </div>
      {payments.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f6f8fa' }}>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                AMOUNT
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                STATUS
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                DESCRIPTION
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                PAYMENT METHOD
              </th>
              <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
                DATE
              </th>
              <th style={{ padding: '8px 16px', width: '48px', borderBottom: '1px solid #e3e8ee' }} />
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {payments.map(payment => (
              <PaymentRow key={payment.id} payment={payment} />
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ padding: '40px', textAlign: 'center', color: '#697386', fontSize: '14px' }}>
          No payments found for this customer.
        </div>
      )}
    </div>
  );
}
