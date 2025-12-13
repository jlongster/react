import React from 'react';
import { PlusIcon } from './Icons';

export default function PaymentMethodsSection() {
  return (
    <div
      data-testid="customer-payment-methods"
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
          Payment methods
        </h3>
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 10px',
            backgroundColor: '#fff',
            border: '1px solid #e3e8ee',
            borderRadius: '6px',
            color: '#1a1f36',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <PlusIcon width={12} height={12} />
          <span style={{ marginLeft: '6px' }}>Add</span>
        </button>
      </div>
      <div
        data-testid="page-module-empty-state-container"
        style={{
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            margin: '0 auto 16px',
            backgroundColor: '#f6f8fa',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="#697386" strokeWidth="2"/>
            <path d="M2 10H22" stroke="#697386" strokeWidth="2"/>
          </svg>
        </div>
        <div style={{ fontSize: '14px', color: '#697386' }}>
          No payment methods
        </div>
        <div style={{ fontSize: '13px', color: '#8792a2', marginTop: '4px' }}>
          This customer hasn't added any payment methods yet.
        </div>
      </div>
    </div>
  );
}
