import React from 'react';
import { PlusIcon, MoreDotsIcon } from './Icons';

function SubscriptionRow({ subscription }) {
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
          {subscription.id}
        </a>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            backgroundColor: subscription.status === 'active' ? '#d1fae5' : '#fee2e2',
            color: subscription.status === 'active' ? '#065f46' : '#991b1b',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {subscription.status}
        </span>
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#1a1f36' }}>
        {subscription.product}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#1a1f36' }}>
        {subscription.amount} / {subscription.interval}
      </td>
      <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', fontSize: '13px', color: '#697386' }}>
        {subscription.currentPeriodEnd}
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

export default function SubscriptionsSection({ subscriptions }) {
  return (
    <div
      data-testid="customer-subscriptions"
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
          Subscriptions
        </h3>
        <a
          data-testid="customer_page_create_subscription"
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 10px',
            backgroundColor: '#fff',
            border: '1px solid #e3e8ee',
            borderRadius: '6px',
            color: '#1a1f36',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          <PlusIcon width={12} height={12} />
          <span style={{ marginLeft: '6px' }}>Create subscription</span>
        </a>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead data-testid="inline-table-header">
          <tr style={{ backgroundColor: '#f6f8fa' }}>
            <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
              SUBSCRIPTION
            </th>
            <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
              STATUS
            </th>
            <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
              PRODUCT
            </th>
            <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
              AMOUNT
            </th>
            <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#697386', borderBottom: '1px solid #e3e8ee' }}>
              CURRENT PERIOD END
            </th>
            <th data-testid="row-actions-header-cell" style={{ padding: '8px 16px', width: '48px', borderBottom: '1px solid #e3e8ee' }} />
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {subscriptions.map(sub => (
            <SubscriptionRow key={sub.id} subscription={sub} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
