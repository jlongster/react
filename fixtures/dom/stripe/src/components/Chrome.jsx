import React from 'react';
import { Box, Text, Button, Icon, DeepNest, FlexContainer, List, ListItem, Divider } from './Wrappers';
import {
  HomeIcon,
  BalancesIcon,
  PaymentsIcon,
  CustomersIcon,
  ProductsIcon,
  ReportsIcon,
  SubscriptionsIcon,
  ClimateIcon,
  DevelopersIcon,
  SearchIcon,
  SettingsIcon,
  NotificationsIcon,
  HelpIcon,
  AppsIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  StarIcon,
  TerminalIcon,
} from './Icons';

// Deep nesting utility components for Chrome
function ChromeOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ChromeContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ChromeWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ChromeInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ChromeLayout({ children, style }) {
  return <div style={style}>{children}</div>;
}

// Account Switcher with deep nesting
function AccountSwitcherOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountSwitcherContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountSwitcherWrapper({ children }) {
  return <div style={{ marginBottom: '16px' }}>{children}</div>;
}

function AccountSwitcherInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountAvatarOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountAvatarContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountAvatarWrapper({ children }) {
  return <div style={{ width: '32px', height: '32px', marginRight: '12px' }}>{children}</div>;
}

function AccountAvatarInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountAvatarElement({ children }) {
  return (
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '6px',
      background: 'linear-gradient(135deg, #635bff 0%, #80e9ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: '14px',
      color: '#fff',
    }}>
      {children}
    </div>
  );
}

function AccountInfoOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountInfoContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountInfoWrapper({ children }) {
  return <div style={{ flex: 1 }}>{children}</div>;
}

function AccountInfoInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AccountSwitcher() {
  return (
    <AccountSwitcherOuter>
      <AccountSwitcherContainer>
        <AccountSwitcherWrapper>
          <AccountSwitcherInner>
            <div data-testid="v2-account-switcher">
              <DeepNest depth={3}>
                <div data-testid="shortcuts-loaded">
                  <DeepNest depth={2}>
                    <a
                      data-testid="account-switcher-trigger"
                      href="#"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 12px',
                        textDecoration: 'none',
                        color: '#fff',
                        borderRadius: '6px',
                      }}
                    >
                      <AccountAvatarOuter>
                        <AccountAvatarContainer>
                          <AccountAvatarWrapper>
                            <AccountAvatarInner>
                              <div data-testid="account-icon">
                                <DeepNest depth={2}>
                                  <div data-testid="raw-account-avatar">
                                    <AccountAvatarElement>A</AccountAvatarElement>
                                  </div>
                                </DeepNest>
                              </div>
                            </AccountAvatarInner>
                          </AccountAvatarWrapper>
                        </AccountAvatarContainer>
                      </AccountAvatarOuter>
                      <AccountInfoOuter>
                        <AccountInfoContainer>
                          <AccountInfoWrapper>
                            <AccountInfoInner>
                              <div data-testid="account-switcher-trigger-title">
                                <DeepNest depth={3}>
                                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>Actual</div>
                                </DeepNest>
                              </div>
                              <DeepNest depth={2}>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Test mode</div>
                              </DeepNest>
                            </AccountInfoInner>
                          </AccountInfoWrapper>
                        </AccountInfoContainer>
                      </AccountInfoOuter>
                      <DeepNest depth={3}>
                        <ChevronDownIcon width={12} height={12} />
                      </DeepNest>
                    </a>
                  </DeepNest>
                </div>
              </DeepNest>
            </div>
          </AccountSwitcherInner>
        </AccountSwitcherWrapper>
      </AccountSwitcherContainer>
    </AccountSwitcherOuter>
  );
}

// Nav Item with extreme nesting
function NavItemOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemLayout({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemContent({ children, style }) {
  return <li style={{ listStyle: 'none', ...style }}>{children}</li>;
}

function NavItemLinkOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemLinkContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemLinkWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemLinkInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function NavItemIconOuter({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemIconContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemIconWrapper({ children }) {
  return <span style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>{children}</span>;
}

function NavItemIconInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemLabelOuter({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemLabelContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemLabelWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function NavItemLabelInner({ children }) {
  return <span>{children}</span>;
}

function NavItem({ testId, linkTestId, icon: IconComponent, label, isActive, hasSubmenu, badge }) {
  return (
    <NavItemOuter>
      <NavItemContainer>
        <NavItemWrapper>
          <NavItemInner>
            <NavItemLayout>
              <NavItemContent data-testid={testId}>
                <NavItemLinkOuter>
                  <NavItemLinkContainer>
                    <NavItemLinkWrapper>
                      <NavItemLinkInner>
                        <a
                          data-testid={linkTestId}
                          href="#"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 12px',
                            textDecoration: 'none',
                            color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                            backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                            borderRadius: '6px',
                            marginBottom: '2px',
                            fontSize: '14px',
                          }}
                        >
                          <NavItemIconOuter>
                            <NavItemIconContainer>
                              <NavItemIconWrapper>
                                <NavItemIconInner>
                                  <span data-testid="primary-nav-item-icon" style={{ fill: isActive ? '#fff' : 'rgba(255,255,255,0.6)' }}>
                                    <DeepNest depth={2}>
                                      <IconComponent width={16} height={16} />
                                    </DeepNest>
                                  </span>
                                </NavItemIconInner>
                              </NavItemIconWrapper>
                            </NavItemIconContainer>
                          </NavItemIconOuter>
                          <NavItemLabelOuter>
                            <NavItemLabelContainer>
                              <NavItemLabelWrapper>
                                <NavItemLabelInner>
                                  <DeepNest depth={2}>{label}</DeepNest>
                                </NavItemLabelInner>
                              </NavItemLabelWrapper>
                            </NavItemLabelContainer>
                          </NavItemLabelOuter>
                          {badge && (
                            <DeepNest depth={3}>
                              <span style={{
                                marginLeft: 'auto',
                                padding: '2px 6px',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius: '10px',
                                fontSize: '11px',
                              }}>
                                {badge}
                              </span>
                            </DeepNest>
                          )}
                          {hasSubmenu && (
                            <DeepNest depth={2}>
                              <span style={{ marginLeft: 'auto' }}>
                                <ChevronRightIcon width={8} height={8} />
                              </span>
                            </DeepNest>
                          )}
                        </a>
                      </NavItemLinkInner>
                    </NavItemLinkWrapper>
                  </NavItemLinkContainer>
                </NavItemLinkOuter>
              </NavItemContent>
            </NavItemLayout>
          </NavItemInner>
        </NavItemWrapper>
      </NavItemContainer>
    </NavItemOuter>
  );
}

// Section header with deep nesting
function SectionHeaderOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SectionHeaderContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SectionHeaderWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SectionHeaderInner({ children, style }) {
  return <div style={style}>{children}</div>;
}

function SectionHeader({ title, action }) {
  return (
    <SectionHeaderOuter>
      <SectionHeaderContainer>
        <SectionHeaderWrapper>
          <SectionHeaderInner style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            marginBottom: '8px',
          }}>
            <DeepNest depth={3}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, textTransform: 'uppercase' }}>
                {title}
              </span>
            </DeepNest>
            {action && (
              <DeepNest depth={2}>
                {action}
              </DeepNest>
            )}
          </SectionHeaderInner>
        </SectionHeaderWrapper>
      </SectionHeaderContainer>
    </SectionHeaderOuter>
  );
}

// Primary Nav with many items
function PrimaryNavOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PrimaryNavContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PrimaryNavWrapper({ children }) {
  return <div style={{ marginBottom: '24px' }}>{children}</div>;
}

function PrimaryNavInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PrimaryNav() {
  return (
    <PrimaryNavOuter>
      <PrimaryNavContainer>
        <PrimaryNavWrapper>
          <PrimaryNavInner>
            <nav data-testid="primary-nav">
              <DeepNest depth={3}>
                <ul data-testid="core-nav-links" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  <NavItem testId="core-nav-item-home" linkTestId="primary-nav-item-link-home" icon={HomeIcon} label="Home" />
                  <NavItem testId="core-nav-item-balances" linkTestId="primary-nav-item-link-balances" icon={BalancesIcon} label="Balances" badge="3" />
                  <NavItem testId="core-nav-item-payments" linkTestId="primary-nav-item-link-payments" icon={PaymentsIcon} label="Payments" hasSubmenu />
                  <NavItem testId="core-nav-item-customers" linkTestId="primary-nav-item-link-customers" icon={CustomersIcon} label="Customers" isActive />
                  <NavItem testId="core-nav-item-products" linkTestId="primary-nav-item-link-products" icon={ProductsIcon} label="Products" hasSubmenu />
                </ul>
              </DeepNest>
            </nav>
          </PrimaryNavInner>
        </PrimaryNavWrapper>
      </PrimaryNavContainer>
    </PrimaryNavOuter>
  );
}

// Shortcuts Nav with many items
function ShortcutsNav() {
  const shortcuts = [
    { id: 'subscriptions', icon: SubscriptionsIcon, label: 'Subscriptions' },
    { id: 'reports', icon: ReportsIcon, label: 'Reports' },
    { id: 'climate', icon: ClimateIcon, label: 'Climate' },
    { id: 'invoices', icon: ReportsIcon, label: 'Invoices' },
    { id: 'quotes', icon: ReportsIcon, label: 'Quotes' },
    { id: 'coupons', icon: ProductsIcon, label: 'Coupons' },
    { id: 'tax-rates', icon: BalancesIcon, label: 'Tax rates' },
    { id: 'billing-portal', icon: CustomersIcon, label: 'Billing portal' },
  ];

  return (
    <div data-testid="shortcuts-nav" style={{ marginBottom: '24px' }}>
      <SectionHeader
        title="Shortcuts"
        action={
          <a data-testid="manage-shortcuts" href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            <DeepNest depth={2}>
              <StarIcon width={12} height={12} />
            </DeepNest>
          </a>
        }
      />
      <DeepNest depth={3}>
        <ul data-testid="shortcuts-nav-links" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {shortcuts.map(item => (
            <NavItem
              key={item.id}
              testId={`recent-nav-item-${item.id}`}
              linkTestId={`primary-nav-item-link-${item.id}`}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </ul>
      </DeepNest>
    </div>
  );
}

// Workloads Nav
function WorkloadsNav() {
  const workloads = [
    { id: 'billing', label: 'Billing' },
    { id: 'payments', label: 'Payments' },
    { id: 'reporting', label: 'Reporting' },
    { id: 'connect', label: 'Connect' },
    { id: 'issuing', label: 'Issuing' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'identity', label: 'Identity' },
    { id: 'radar', label: 'Radar' },
    { id: 'sigma', label: 'Sigma' },
    { id: 'atlas', label: 'Atlas' },
    { id: 'more', label: 'More' },
  ];

  return (
    <div data-testid="workloads-nav" style={{ marginBottom: '24px' }}>
      <SectionHeader title="Workloads" />
      <DeepNest depth={3}>
        <ul data-testid="workloads-nav-links" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {workloads.map(item => (
            <li key={item.id} style={{ listStyle: 'none' }}>
              <DeepNest depth={4}>
                <a
                  data-testid={`toggle-workload-${item.id}`}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    borderRadius: '6px',
                    fontSize: '14px',
                  }}
                >
                  <DeepNest depth={2}>
                    <span>{item.label}</span>
                  </DeepNest>
                  <span data-testid={`${item.id}-arrow`}>
                    <DeepNest depth={2}>
                      <ChevronDownIcon width={12} height={12} />
                    </DeepNest>
                  </span>
                </a>
              </DeepNest>
            </li>
          ))}
        </ul>
      </DeepNest>
    </div>
  );
}

// Developer Nav
function DeveloperNav() {
  const devItems = [
    { id: 'developers', icon: DevelopersIcon, label: 'Developers' },
    { id: 'api-keys', icon: TerminalIcon, label: 'API keys' },
    { id: 'webhooks', icon: TerminalIcon, label: 'Webhooks' },
    { id: 'events', icon: TerminalIcon, label: 'Events' },
    { id: 'logs', icon: TerminalIcon, label: 'Logs' },
  ];

  return (
    <div style={{ marginBottom: '24px' }}>
      <SectionHeader title="Developers" />
      <DeepNest depth={3}>
        <ul data-testid="developer-nav-links" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {devItems.map(item => (
            <NavItem
              key={item.id}
              testId={`dev-nav-item-${item.id}`}
              linkTestId={`dev-nav-link-${item.id}`}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </ul>
      </DeepNest>
    </div>
  );
}

// Chrome Header Toolbar with deep nesting
function HeaderToolbarOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function HeaderToolbarContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function HeaderToolbarWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function HeaderToolbarInner({ children, style }) {
  return <div style={style}>{children}</div>;
}

function SearchBoxOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SearchBoxContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SearchBoxWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SearchBoxInner({ children, style }) {
  return <div style={style}>{children}</div>;
}

function ToolbarButtonOuter({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ToolbarButtonContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ToolbarButtonWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ToolbarButtonInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ToolbarButton({ testId, icon, notification }) {
  return (
    <ToolbarButtonOuter>
      <ToolbarButtonContainer>
        <ToolbarButtonWrapper>
          <ToolbarButtonInner>
            <button
              data-testid={testId}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fill: '#697386',
              }}
            >
              <DeepNest depth={3}>
                {icon}
              </DeepNest>
              {notification && (
                <DeepNest depth={2}>
                  <span
                    data-testid="notifications-counter"
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#ef4444',
                      borderRadius: '50%',
                    }}
                  />
                </DeepNest>
              )}
            </button>
          </ToolbarButtonInner>
        </ToolbarButtonWrapper>
      </ToolbarButtonContainer>
    </ToolbarButtonOuter>
  );
}

function ChromeHeaderToolbar() {
  return (
    <HeaderToolbarOuter>
      <HeaderToolbarContainer>
        <HeaderToolbarWrapper>
          <HeaderToolbarInner
            data-testid="chrome-header-toolbar"
            style={{
              position: 'fixed',
              top: 0,
              left: '240px',
              right: 0,
              height: '60px',
              backgroundColor: '#fff',
              borderBottom: '1px solid #e3e8ee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              zIndex: 100,
            }}
          >
            <div data-testid="leftBox" style={{ display: 'flex', alignItems: 'center' }}>
              <SearchBoxOuter>
                <SearchBoxContainer>
                  <SearchBoxWrapper>
                    <SearchBoxInner
                      data-testid="suggestion-input"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 12px',
                        backgroundColor: '#f6f8fa',
                        borderRadius: '6px',
                        minWidth: '300px',
                        color: '#697386',
                      }}
                    >
                      <DeepNest depth={3}>
                        <SearchIcon width={16} height={16} />
                      </DeepNest>
                      <DeepNest depth={2}>
                        <span style={{ marginLeft: '8px', fontSize: '14px' }}>Search...</span>
                      </DeepNest>
                      <DeepNest depth={2}>
                        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#8792a2' }}>⌘K</span>
                      </DeepNest>
                    </SearchBoxInner>
                  </SearchBoxWrapper>
                </SearchBoxContainer>
              </SearchBoxOuter>
            </div>
            <div data-testid="rightBox" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DeepNest depth={4}>
                <button
                  data-testid="livemode-switcher"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px 12px',
                    backgroundColor: '#fef3c7',
                    border: '1px solid #fcd34d',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#92400e',
                    cursor: 'pointer',
                  }}
                >
                  <DeepNest depth={2}>Test mode</DeepNest>
                </button>
              </DeepNest>
              <ToolbarButton testId="chrome-apps-menu-trigger" icon={<AppsIcon width={16} height={16} />} />
              <ToolbarButton testId="chrome-notifications" icon={<NotificationsIcon width={16} height={16} />} notification />
              <ToolbarButton testId="chrome-settings-menu-trigger" icon={<SettingsIcon width={16} height={16} />} />
              <ToolbarButton testId="chrome-help-menu-trigger" icon={<HelpIcon width={16} height={16} />} />
            </div>
          </HeaderToolbarInner>
        </HeaderToolbarWrapper>
      </HeaderToolbarContainer>
    </HeaderToolbarOuter>
  );
}

export default function Chrome() {
  return (
    <ChromeOuter>
      <ChromeContainer>
        <ChromeWrapper>
          <ChromeInner>
            <ChromeLayout
              data-testid="default-chrome"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '240px',
                height: '100vh',
                backgroundColor: '#0a2540',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 200,
              }}
            >
              <DeepNest depth={3}>
                <div style={{ flex: 1, padding: '16px 8px', overflowY: 'auto' }}>
                  <DeepNest depth={2}>
                    <AccountSwitcher />
                    <PrimaryNav />
                    <ShortcutsNav />
                    <WorkloadsNav />
                    <DeveloperNav />
                  </DeepNest>
                </div>
              </DeepNest>
            </ChromeLayout>
            <ChromeHeaderToolbar />
          </ChromeInner>
        </ChromeWrapper>
      </ChromeContainer>
    </ChromeOuter>
  );
}
