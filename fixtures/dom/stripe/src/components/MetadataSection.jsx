import React from 'react';
import { EditIcon } from './Icons';

export default function MetadataSection() {
  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #e3e8ee',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a1f36',
          }}
        >
          Metadata
        </h3>
        <a
          data-testid="metadata_edit_button"
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '4px',
            color: '#635bff',
            textDecoration: 'none',
            fontSize: '13px',
            fill: '#635bff',
          }}
        >
          <EditIcon width={12} height={12} />
          <span style={{ marginLeft: '4px' }}>Edit</span>
        </a>
      </div>
      <div
        data-testid="page-module-empty-state-container"
        style={{
          padding: '20px',
          textAlign: 'center',
          color: '#697386',
          fontSize: '13px',
        }}
      >
        No metadata
      </div>
    </div>
  );
}
