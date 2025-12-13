import React from 'react';
import { LightbulbIcon, CloseIcon } from './Icons';

export default function InsightsBanner() {
  return (
    <div
      data-testid="product-boundary-content-insights-notice__details-page-layout-customer-details-insights.tax-threshold-crossed-insight"
      style={{ marginBottom: '24px' }}
    >
      <button
        data-testid="primary-bound-insights"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          padding: '16px',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            backgroundColor: '#dbeafe',
            borderRadius: '50%',
            marginRight: '12px',
            fill: '#3b82f6',
            flexShrink: 0,
          }}
        >
          <LightbulbIcon width={16} height={16} />
        </div>
        <div style={{ flex: 1 }}>
          <div
            data-testid="insight-notice"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#1e40af',
              marginBottom: '4px',
            }}
          >
            Tax registration threshold crossed
          </div>
          <div style={{ fontSize: '13px', color: '#3b82f6' }}>
            This customer's purchases have crossed a tax registration threshold. Consider registering to collect tax.
          </div>
          <a
            data-testid="insight-cta"
            href="#"
            style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#1e40af',
              textDecoration: 'none',
            }}
          >
            Learn more →
          </a>
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fill: '#3b82f6',
          }}
        >
          <CloseIcon width={12} height={12} />
        </button>
      </button>
      <div data-testid="destructive-bound-insights" />
    </div>
  );
}
