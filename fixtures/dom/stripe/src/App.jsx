import React, { useState, useCallback } from 'react';
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
function ControlPanel({ onRerenderAll, onRerenderContent, onRerenderChrome, onToggleTheme, theme, renderCount }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme === 'dark' ? '#1a1f36' : '#635bff',
      color: '#fff',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 10000,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: '13px',
    }}>
      <span style={{ fontWeight: 600 }}>Re-render Controls:</span>
      <button
        data-testid="rerender-all-btn"
        onClick={onRerenderAll}
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
        Re-render ALL
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
        Re-render Content
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
        Re-render Chrome
      </button>
      <button
        data-testid="toggle-theme-btn"
        onClick={onToggleTheme}
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
        Toggle Theme
      </button>
      <span style={{ marginLeft: 'auto', opacity: 0.8 }}>
        Render count: {renderCount}
      </span>
    </div>
  );
}

export default function App() {
  // State that triggers full app re-render (via key change = unmount/remount)
  const [globalKey, setGlobalKey] = useState(0);
  // State that triggers content area re-render
  const [contentKey, setContentKey] = useState(0);
  // State that triggers chrome re-render
  const [chromeKey, setChromeKey] = useState(0);
  // Theme state affects styling throughout
  const [theme, setTheme] = useState('light');
  // Track render count as separate state (to test batching)
  const [renderCount, setRenderCount] = useState(0);

  // Create customer data with dynamic values that change on re-render
  const customerData = {
    ...baseCustomerData,
    _renderKey: contentKey,
    _theme: theme,
  };

  const handleRerenderAll = useCallback(() => {
    console.log('🔄 Triggering FULL app re-render (unmount/remount)...');
    setGlobalKey(k => k + 1);
    setRenderCount(c => c + 1);
  }, []);

  const handleRerenderContent = useCallback(() => {
    console.log('🔄 Triggering CONTENT area re-render...');
    setContentKey(k => k + 1);
    setRenderCount(c => c + 1);
  }, []);

  const handleRerenderChrome = useCallback(() => {
    console.log('🔄 Triggering CHROME re-render...');
    setChromeKey(k => k + 1);
    setRenderCount(c => c + 1);
  }, []);

  const handleToggleTheme = useCallback(() => {
    console.log('🔄 Triggering THEME toggle...');
    setTheme(t => t === 'light' ? 'dark' : 'light');
    setRenderCount(c => c + 1);
  }, []);

  const bgColor = theme === 'dark' ? '#0a0e1a' : '#f6f8fa';

  return (
    <AppOuter key={globalKey}>
      <AppContainer>
        <AppWrapper>
          <AppInner>
            <ControlPanel
              onRerenderAll={handleRerenderAll}
              onRerenderContent={handleRerenderContent}
              onRerenderChrome={handleRerenderChrome}
              onToggleTheme={handleToggleTheme}
              theme={theme}
              renderCount={renderCount}
            />
            <AppLayout style={{
              display: 'flex',
              minHeight: '100vh',
              backgroundColor: bgColor,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              paddingTop: '44px', // Account for fixed control panel
            }}>
              <DeepNest depth={3}>
                <Chrome key={chromeKey} theme={theme} />
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
                                    <CustomerDetailsPage key={contentKey} customer={customerData} theme={theme} />
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
                <Workbench customerId={customerData.id} theme={theme} />
              </DeepNest>
            </AppLayout>
          </AppInner>
        </AppWrapper>
      </AppContainer>
    </AppOuter>
  );
}
