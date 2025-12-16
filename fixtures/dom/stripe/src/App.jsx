import React, { useState, useCallback, useMemo } from 'react';
import Chrome from './components/Chrome';
import CustomerDetailsPage from './components/CustomerDetailsPage';
import Workbench from './components/Workbench';
import { DeepNest } from './components/Wrappers';

// Customer data that would typically come from an API
const baseCustomerData = {
  id: 'cus_REOnGUfKk07qeV',
  email: 'elouisa@kentdisplays.com',
  name: 'Elouisa Kent',
  description: 'Kent Displays customer account',
  phone: '+1 555-123-4567',
  created: 'Dec 3, 2024, 12:21 PM',
  balance: '$0.00',
  currency: 'usd',
  defaultPaymentMethod: null,
  invoicePrefix: 'KENT',
  nextInvoiceSequence: 1,
  taxExempt: 'none',
  preferredLocales: ['en-US'],
  testClock: null,
  livemode: false,
};

// App wrapper components for artificial complexity
function AppOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AppContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AppWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AppInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AppLayout({ children, style }) {
  return <div data-testid="app-root" style={style}>{children}</div>;
}

function MainContentOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function MainContentContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function MainContentWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function MainContentInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function MainContentLayout({ children, style }) {
  return <main style={style}>{children}</main>;
}

function WorldRootOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function WorldRootContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function WorldRootWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function WorldRootInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function WorldRootLayout({ children }) {
  return <div data-testid="world-root">{children}</div>;
}

// Control Panel for triggering re-renders
function ControlPanel({ onRemountAll, onRerenderAll, onRerenderContent, onRerenderChrome }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#635bff',
      color: '#fff',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 10000,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: '13px',
    }}>
      <span style={{ fontWeight: 600 }}>Controls:</span>
      <button
        data-testid="remount-all-btn"
        onClick={onRemountAll}
        style={{
          backgroundColor: '#fff',
          color: '#635bff',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Remount ALL
      </button>
      <button
        data-testid="rerender-all-btn"
        onClick={onRerenderAll}
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Rerender All
      </button>
      <button
        data-testid="rerender-content-btn"
        onClick={onRerenderContent}
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Rerender Content
      </button>
      <button
        data-testid="rerender-chrome-btn"
        onClick={onRerenderChrome}
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Rerender Chrome
      </button>
    </div>
  );
}

export default function App() {
  // State that triggers full app remount (via key change)
  const [globalKey, setGlobalKey] = useState(0);
  // State that triggers App to rerender but nothing changes (just diff, no commit)
  const [localCounter, setLocalCounter] = useState(0);
  // Counter passed to Chrome to force it to rerender with DOM changes
  const [chromeCounter, setChromeCounter] = useState(0);
  // Counter passed to Content to force it to rerender with DOM changes
  const [contentCounter, setContentCounter] = useState(0);

  // Memoize customer data - only changes when contentCounter changes
  const customerData = useMemo(() => ({
    ...baseCustomerData,
    _renderCounter: contentCounter,
  }), [contentCounter]);

  const handleRemountAll = useCallback(() => {
    console.log('🔄 Triggering FULL app REMOUNT (unmount + mount)...');
    setGlobalKey(k => k + 1);
  }, []);

  const handleRerenderAll = useCallback(() => {
    console.log('🔄 Triggering App rerender (diff only, no DOM changes)...');
    setLocalCounter(c => c + 1);
  }, []);

  const handleRerenderContent = useCallback(() => {
    console.log('🔄 Triggering CONTENT rerender (with DOM changes)...');
    React.startTransition(() => {
      setContentCounter(c => c + 1);
    })
  }, []);

  const handleRerenderChrome = useCallback(() => {
    console.log('🔄 Triggering CHROME rerender (with DOM changes)...');
    setChromeCounter(c => c + 1);
  }, []);

  return (
    <AppOuter key={globalKey}>
      <AppContainer>
        <AppWrapper>
          <AppInner>
            <ControlPanel
              onRemountAll={handleRemountAll}
              onRerenderAll={handleRerenderAll}
              onRerenderContent={handleRerenderContent}
              onRerenderChrome={handleRerenderChrome}
            />
            <AppLayout style={{
              display: 'flex',
              minHeight: '100vh',
              backgroundColor: '#f6f8fa',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              paddingTop: '44px', // Account for fixed control panel
            }}>
              <DeepNest depth={3}>
                <Chrome renderCounter={chromeCounter} />
              </DeepNest>
              <MainContentOuter>
                <MainContentContainer>
                  <MainContentWrapper>
                    <MainContentInner>
                      <MainContentLayout style={{
                        flex: 1,
                        marginLeft: '240px',
                        paddingBottom: '300px',
                      }}>
                        <WorldRootOuter>
                          <WorldRootContainer>
                            <WorldRootWrapper>
                              <WorldRootInner>
                                <WorldRootLayout>
                                  <DeepNest depth={3}>
                                    <CustomerDetailsPage customer={customerData} renderCounter={contentCounter} />
                                  </DeepNest>
                                </WorldRootLayout>
                              </WorldRootInner>
                            </WorldRootWrapper>
                          </WorldRootContainer>
                        </WorldRootOuter>
                      </MainContentLayout>
                    </MainContentInner>
                  </MainContentWrapper>
                </MainContentContainer>
              </MainContentOuter>
              <DeepNest depth={3}>
                <Workbench customerId={customerData.id} />
              </DeepNest>
            </AppLayout>
          </AppInner>
        </AppWrapper>
      </AppContainer>
    </AppOuter>
  );
}
