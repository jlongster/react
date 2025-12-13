import React from 'react';
import { ClockIcon } from './Icons';

function TimelineEvent({ title, description, time, type }) {
  const getTypeColor = () => {
    switch (type) {
      case 'success':
        return '#10b981';
      case 'info':
        return '#3b82f6';
      case 'warning':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div
      data-testid="TimelineEvent__Box"
      style={{
        display: 'flex',
        padding: '12px 0',
        borderBottom: '1px solid #e3e8ee',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: getTypeColor(),
          marginTop: '6px',
          marginRight: '12px',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13px', color: '#1a1f36', marginBottom: '2px' }}>
          {title}
        </div>
        {description && (
          <div style={{ fontSize: '13px', color: '#697386' }}>
            {description}
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          color: '#8792a2',
        }}
      >
        <ClockIcon width={12} height={12} />
        {time}
      </div>
    </div>
  );
}

export default function RecentActivitySection({ customer }) {
  const activities = [
    {
      id: 1,
      title: 'Customer created',
      description: customer.email,
      time: 'Dec 3, 12:21 PM',
      type: 'success',
    },
    {
      id: 2,
      title: 'Subscription started',
      description: 'Starter Plan - $20.00/month',
      time: 'Dec 3, 12:22 PM',
      type: 'info',
    },
    {
      id: 3,
      title: 'Payment succeeded',
      description: '$20.00 USD',
      time: 'Dec 3, 12:22 PM',
      type: 'success',
    },
  ];

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
          Recent activity
        </h3>
        <a
          href="#"
          style={{
            fontSize: '13px',
            color: '#635bff',
            textDecoration: 'none',
          }}
        >
          View all
        </a>
      </div>
      <div style={{ padding: '0 16px' }}>
        {activities.map(activity => (
          <TimelineEvent
            key={activity.id}
            title={activity.title}
            description={activity.description}
            time={activity.time}
            type={activity.type}
          />
        ))}
      </div>
    </div>
  );
}
