import React, { useState, memo } from 'react';
import {
  TerminalIcon,
  MinimizeIcon,
  MaximizeIcon,
  SettingsIcon,
  CopyIcon,
  SearchIcon,
  CloseIcon,
} from './Icons';

function WorkbenchTab({ id, label, isActive, onClick }) {
  return (
    <button
      data-testid={`wb-WorkbenchTab-${id}`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        backgroundColor: isActive ? '#1e293b' : 'transparent',
        border: 'none',
        borderRadius: '6px 6px 0 0',
        color: isActive ? '#fff' : '#94a3b8',
        fontSize: '13px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

function EventListItem({ event }) {
  return (
    <div
      data-testid="wb-EventListItem"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderBottom: '1px solid #334155',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: event.status === 'success' ? '#10b981' : '#f59e0b',
          marginRight: '12px',
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '13px', color: '#e2e8f0', marginBottom: '2px' }}>
          {event.type}
        </div>
        <div style={{ fontSize: '12px', color: '#64748b' }}>
          {event.id}
        </div>
      </div>
      <div style={{ fontSize: '12px', color: '#64748b' }}>
        {event.time}
      </div>
    </div>
  );
}

function InspectorContent({ customerId }) {
  return (
    <div data-testid="wb-Inspector-content" style={{ padding: '16px' }}>
      <div
        data-testid="wb-inspector-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#e2e8f0' }}>
            Customer
          </span>
          <span
            data-testid="wb-read-only-badge"
            style={{
              padding: '2px 6px',
              backgroundColor: '#334155',
              borderRadius: '4px',
              fontSize: '11px',
              color: '#94a3b8',
            }}
          >
            READ ONLY
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            data-testid="wb-inspector-editInApiExplorerButton"
            style={{
              padding: '4px 8px',
              backgroundColor: '#334155',
              border: 'none',
              borderRadius: '4px',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Edit in API Explorer
          </button>
        </div>
      </div>

      <div data-testid="wb-InspectAction-resourceId" style={{ marginBottom: '16px' }}>
        <div
          data-testid="wb-block-select-cus_REOnGUfKk07qeV-selected"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: '#1e293b',
            borderRadius: '6px',
          }}
        >
          <span
            data-testid="wb-richid-text"
            style={{ fontSize: '13px', color: '#e2e8f0', fontFamily: 'monospace' }}
          >
            {customerId}
          </span>
          <button
            data-testid="wb-copy-button"
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fill: '#64748b',
            }}
          >
            <CopyIcon width={12} height={12} />
          </button>
        </div>
      </div>

      <div data-testid="wb-object-display-limited-data">
        <div style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#64748b', fontSize: '12px' }}>id</span>
          <span style={{ color: '#e2e8f0', fontSize: '13px', marginLeft: '12px', fontFamily: 'monospace' }}>
            "{customerId}"
          </span>
        </div>
        <div style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#64748b', fontSize: '12px' }}>object</span>
          <span style={{ color: '#e2e8f0', fontSize: '13px', marginLeft: '12px', fontFamily: 'monospace' }}>
            "customer"
          </span>
        </div>
        <div style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#64748b', fontSize: '12px' }}>email</span>
          <span style={{ color: '#e2e8f0', fontSize: '13px', marginLeft: '12px', fontFamily: 'monospace' }}>
            "elouisa@kentdisplays.com"
          </span>
        </div>
        <div style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#64748b', fontSize: '12px' }}>livemode</span>
          <span style={{ color: '#f59e0b', fontSize: '13px', marginLeft: '12px', fontFamily: 'monospace' }}>
            false
          </span>
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            data-testid="wb-inspector-overview-tab"
            style={{
              padding: '4px 8px',
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '4px',
              color: '#e2e8f0',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Overview
          </button>
          <button
            data-testid="wb-inspector-events-tab"
            style={{
              padding: '4px 8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              color: '#64748b',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Events
          </button>
          <button
            data-testid="wb-inspector-logs-tab"
            style={{
              padding: '4px 8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              color: '#64748b',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Logs
          </button>
        </div>
      </div>
    </div>
  );
}

function EventsPanel() {
  const events = [
    { id: 'evt_1QTuylA0UWcuzZbp', type: 'customer.subscription.created', status: 'success', time: '12:22 PM' },
    { id: 'evt_1QTuymA0UWcuzZbp', type: 'invoice.paid', status: 'success', time: '12:22 PM' },
    { id: 'evt_1QTuynA0UWcuzZbp', type: 'payment_intent.succeeded', status: 'success', time: '12:22 PM' },
  ];

  return (
    <div data-testid="wb-Events" style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '300px', borderRight: '1px solid #334155' }}>
        <div
          data-testid="wb-FilterBar-events"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            borderBottom: '1px solid #334155',
            gap: '8px',
          }}
        >
          <div
            data-testid="wb-search-input-events"
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              padding: '6px 10px',
              backgroundColor: '#1e293b',
              borderRadius: '4px',
              fill: '#64748b',
            }}
          >
            <SearchIcon width={14} height={14} />
            <input
              data-testid="wb-search-input"
              type="text"
              placeholder="Search events..."
              style={{
                flex: 1,
                marginLeft: '8px',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#e2e8f0',
                fontSize: '13px',
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', padding: '8px 12px', gap: '6px' }}>
          <button
            data-testid="wb-filter-chip-date"
            style={{
              padding: '4px 8px',
              backgroundColor: '#334155',
              border: 'none',
              borderRadius: '4px',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Date
          </button>
          <button
            data-testid="wb-filter-chip-eventtype"
            style={{
              padding: '4px 8px',
              backgroundColor: '#334155',
              border: 'none',
              borderRadius: '4px',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Event type
          </button>
          <button
            data-testid="wb-filter-chip-status"
            style={{
              padding: '4px 8px',
              backgroundColor: '#334155',
              border: 'none',
              borderRadius: '4px',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Status
          </button>
        </div>
        <div data-testid="wb-EventList">
          {events.map(event => (
            <EventListItem key={event.id} event={event} />
          ))}
        </div>
        <div
          data-testid="wb-events-list-pending-webhooks"
          style={{ padding: '8px 12px', borderTop: '1px solid #334155' }}
        >
          <button
            data-testid="wb-refresh-deliveries-button"
            style={{
              padding: '4px 8px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#64748b',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Refresh
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '16px' }}>
        <div data-testid="wb-EventDetails">
          <div
            data-testid="wb-EventDescription"
            style={{ fontSize: '14px', color: '#e2e8f0', marginBottom: '8px' }}
          >
            customer.subscription.created
          </div>
          <div data-testid="wb-event-property-list" style={{ fontSize: '13px', color: '#94a3b8' }}>
            A subscription was created for this customer.
          </div>
        </div>
      </div>
    </div>
  );
}

function ShellPanel() {
  return (
    <div data-testid="wb-minishell" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        data-testid="workbench-shell-terminal-pane-0-selector"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          borderBottom: '1px solid #334155',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '13px', color: '#e2e8f0' }}>Shell</span>
        <button
          data-testid="wb-minishell-expandButton"
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fill: '#64748b',
          }}
        >
          <MaximizeIcon width={12} height={12} />
        </button>
        <button
          data-testid="wb-minishell-maximizeButton"
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
            fill: '#64748b',
          }}
        >
          <MaximizeIcon width={12} height={12} />
        </button>
      </div>
      <div style={{ flex: 1, padding: '12px', fontFamily: 'monospace', fontSize: '13px', color: '#e2e8f0' }}>
        <div style={{ color: '#64748b', marginBottom: '8px' }}>$ stripe</div>
        <div style={{ color: '#10b981' }}>Stripe CLI ready</div>
      </div>
    </div>
  );
}

function TrayActions() {
  return (
    <div
      data-testid="wb-WorkbenchTrayActionIcons"
      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
    >
      <button
        data-testid="wb-WorkbenchTray-InspectAction"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fill: '#64748b',
        }}
      >
        <SearchIcon width={14} height={14} />
      </button>
      <button
        data-testid="wb-WorkbenchTray-EventDestinationsAction"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fill: '#64748b',
        }}
      >
        <SettingsIcon width={14} height={14} />
      </button>
      <button
        data-testid="wb-WorkbenchTray-ApiActivityAction"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fill: '#64748b',
        }}
      >
        <TerminalIcon width={14} height={14} />
      </button>
      <button
        data-testid="wb-WorkbenchTray-InsightAction"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fill: '#64748b',
        }}
      >
        <TerminalIcon width={14} height={14} />
      </button>
    </div>
  );
}

function Workbench({ customerId }) {
  const [activeTab, setActiveTab] = useState('inspector');
  const [isMinimized, setIsMinimized] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'inspector', label: 'Inspector' },
    { id: 'events', label: 'Events' },
    { id: 'logs', label: 'Logs' },
    { id: 'shell', label: 'Shell' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'blueprints', label: 'Blueprints' },
    { id: 'health', label: 'Health' },
  ];

  return (
    <div
      data-testid="workbench-root"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '240px',
        right: 0,
        backgroundColor: '#0f172a',
        borderTop: '1px solid #334155',
        zIndex: 100,
      }}
    >
      <div
        data-testid="wb-root-resize-handle"
        style={{
          height: '4px',
          cursor: 'ns-resize',
          backgroundColor: 'transparent',
        }}
      />

      <div
        data-testid="wb-Workbench"
        style={{ height: isMinimized ? '48px' : '300px', display: 'flex', flexDirection: 'column' }}
      >
        <div
          data-testid="wb-WorkbenchHeader-while-not-maximized"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            height: '48px',
            borderBottom: '1px solid #334155',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {tabs.map(tab => (
              <WorkbenchTab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              data-testid="wb-WindowManagement-WorkbenchTrayActions"
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <TrayActions />
            </div>
            <button
              data-testid="wb-WorkbenchSettings"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fill: '#64748b',
              }}
            >
              <SettingsIcon width={14} height={14} />
            </button>
            <button
              data-testid="wb-workbenchIconBar-copyLink"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fill: '#64748b',
              }}
            >
              <CopyIcon width={14} height={14} />
            </button>
            <button
              data-testid="wb-WorkbenchMinimize"
              onClick={() => setIsMinimized(!isMinimized)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fill: '#64748b',
              }}
            >
              <MinimizeIcon width={14} height={14} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div
            data-testid="wb-WorkbenchContent"
            style={{ flex: 1, overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', height: '100%' }}>
              <div
                data-testid="wb-inspector-sidebar"
                style={{ width: '280px', borderRight: '1px solid #334155', overflow: 'auto' }}
              >
                <InspectorContent customerId={customerId} />
              </div>
              <div data-testid="wb-InspectorTab" style={{ flex: 1, overflow: 'auto' }}>
                {activeTab === 'events' && <EventsPanel />}
                {activeTab === 'shell' && <ShellPanel />}
                {activeTab === 'inspector' && (
                  <div style={{ padding: '16px', color: '#94a3b8', fontSize: '13px' }}>
                    Select an object to inspect its details.
                  </div>
                )}
                {activeTab !== 'events' && activeTab !== 'shell' && activeTab !== 'inspector' && (
                  <div style={{ padding: '16px', color: '#94a3b8', fontSize: '13px' }}>
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} panel content
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div data-testid="wb-WorkbenchTray" style={{ display: 'none' }} />

      <div data-testid="wb-feedbackForm-sendFeedbackButton" style={{ display: 'none' }} />
      <div data-testid="wb-Inspector-FollowPreferenceSwitch" style={{ display: 'none' }} />
    </div>
  );
}

export default memo(Workbench);
