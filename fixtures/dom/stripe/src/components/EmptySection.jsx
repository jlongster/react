import React from 'react';
import { PlusIcon } from './Icons';

export default function EmptySection({ title, actionLabel, actionTestId, testId, hasTable }) {
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
          {title}
        </h3>
        {actionLabel && (
          <a
            data-testid={actionTestId}
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
            <span style={{ marginLeft: '6px' }}>{actionLabel}</span>
          </a>
        )}
      </div>
      {hasTable ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody data-testid="table-body">
            <tr>
              <td
                style={{
                  padding: '40px',
                  textAlign: 'center',
                  color: '#697386',
                  fontSize: '14px',
                }}
              >
                No {title.toLowerCase()} found.
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div
          data-testid={testId}
          style={{
            padding: '40px',
            textAlign: 'center',
            color: '#697386',
            fontSize: '14px',
          }}
        >
          No {title.toLowerCase()} found.
        </div>
      )}
    </div>
  );
}
