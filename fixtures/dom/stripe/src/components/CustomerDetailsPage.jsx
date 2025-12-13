import React, { memo } from 'react';
import { Box, Text, Button, Badge, Card, DeepNest, FlexContainer, Grid, GridItem, List, ListItem, Divider } from './Wrappers';
import { ComplexSubscriptionsTable, ComplexPaymentsTable, ComplexInvoicesTable } from './ComplexTable';
import { ChevronRightIcon, PlusIcon, MoreDotsIcon, EditIcon, CopyIcon, ClockIcon, LightbulbIcon, CloseIcon } from './Icons';

// ========================================
// DEEPLY NESTED PAGE COMPONENTS
// ========================================

function PageOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PageContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PageWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PageInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function PageLayout({ children, style }) {
  return <div style={style}>{children}</div>;
}

// ========================================
// BREADCRUMBS WITH DEEP NESTING
// ========================================

function BreadcrumbsOuter({ children }) {
  return <nav style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>{children}</nav>;
}

function BreadcrumbsContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function BreadcrumbsWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function BreadcrumbsInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function BreadcrumbItem({ children, isLink }) {
  return (
    <BreadcrumbItemOuter>
      <BreadcrumbItemContainer>
        <BreadcrumbItemWrapper>
          <BreadcrumbItemInner>
            <BreadcrumbItemContent isLink={isLink}>
              <DeepNest depth={3}>{children}</DeepNest>
            </BreadcrumbItemContent>
          </BreadcrumbItemInner>
        </BreadcrumbItemWrapper>
      </BreadcrumbItemContainer>
    </BreadcrumbItemOuter>
  );
}

function BreadcrumbItemOuter({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbItemContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbItemWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbItemInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbItemContent({ children, isLink }) {
  if (isLink) {
    return <a href="#" style={{ color: '#635bff', textDecoration: 'none', fontSize: '14px' }}>{children}</a>;
  }
  return <span style={{ color: '#1a1f36', fontSize: '14px' }}>{children}</span>;
}

function BreadcrumbSeparator() {
  return (
    <BreadcrumbSeparatorOuter>
      <BreadcrumbSeparatorContainer>
        <BreadcrumbSeparatorWrapper>
          <BreadcrumbSeparatorInner>
            <span style={{ margin: '0 8px', color: '#697386' }}>
              <DeepNest depth={2}>
                <ChevronRightIcon width={8} height={8} />
              </DeepNest>
            </span>
          </BreadcrumbSeparatorInner>
        </BreadcrumbSeparatorWrapper>
      </BreadcrumbSeparatorContainer>
    </BreadcrumbSeparatorOuter>
  );
}

function BreadcrumbSeparatorOuter({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbSeparatorContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbSeparatorWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BreadcrumbSeparatorInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function Breadcrumbs() {
  return (
    <BreadcrumbsOuter>
      <BreadcrumbsContainer>
        <BreadcrumbsWrapper>
          <BreadcrumbsInner>
            <BreadcrumbItem isLink>Customers</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>elouisa@kentdisplays.com</BreadcrumbItem>
          </BreadcrumbsInner>
        </BreadcrumbsWrapper>
      </BreadcrumbsContainer>
    </BreadcrumbsOuter>
  );
}

// ========================================
// HEADER ACTION BUTTONS
// ========================================

function ActionButtonOuter({ children }) {
  return <span style={{ display: 'inline-flex' }}>{children}</span>;
}

function ActionButtonContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ActionButtonWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ActionButtonInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ActionButton({ testId, icon, label }) {
  return (
    <ActionButtonOuter>
      <ActionButtonContainer>
        <ActionButtonWrapper>
          <ActionButtonInner>
            <a
              data-testid={testId}
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: '#fff',
                border: '1px solid #e3e8ee',
                borderRadius: '6px',
                color: '#1a1f36',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <DeepNest depth={3}>
                {icon}
              </DeepNest>
              {label && (
                <DeepNest depth={2}>
                  <span style={{ marginLeft: '6px' }}>{label}</span>
                </DeepNest>
              )}
            </a>
          </ActionButtonInner>
        </ActionButtonWrapper>
      </ActionButtonContainer>
    </ActionButtonOuter>
  );
}

function ActionButtons() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <ActionButton testId="customer_universal_action_button_create_payment_button_id" icon={<PlusIcon width={12} height={12} />} label="Create payment" />
      <ActionButton testId="create_invoice_button" icon={<PlusIcon width={12} height={12} />} label="Create invoice" />
      <ActionButton testId="overflow-menu" icon={<MoreDotsIcon width={12} height={12} />} />
    </div>
  );
}

// ========================================
// CUSTOMER HEADER
// ========================================

function CustomerHeaderOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function CustomerHeaderContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function CustomerHeaderWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function CustomerHeaderInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function CustomerHeaderLayout({ children, style }) {
  return <div style={style}>{children}</div>;
}

function CustomerHeader({ customer }) {
  return (
    <CustomerHeaderOuter>
      <CustomerHeaderContainer>
        <CustomerHeaderWrapper>
          <CustomerHeaderInner>
            <CustomerHeaderLayout
              data-testid="bento-header"
              style={{
                padding: '24px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #e3e8ee',
              }}
            >
              <DeepNest depth={3}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                  <DeepNest depth={2}>
                    <Breadcrumbs />
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <DeepNest depth={3}>
                        <div>
                          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 500, color: '#1a1f36', marginBottom: '4px' }}>
                            <DeepNest depth={2}>{customer.email}</DeepNest>
                          </h1>
                          <div style={{ color: '#697386', fontSize: '14px' }}>
                            <DeepNest depth={2}>{customer.id}</DeepNest>
                          </div>
                        </div>
                      </DeepNest>
                      <ActionButtons />
                    </div>
                  </DeepNest>
                </div>
              </DeepNest>
            </CustomerHeaderLayout>
          </CustomerHeaderInner>
        </CustomerHeaderWrapper>
      </CustomerHeaderContainer>
    </CustomerHeaderOuter>
  );
}

// ========================================
// INSIGHTS BANNER WITH DEEP NESTING
// ========================================

function InsightsBannerOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function InsightsBannerContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function InsightsBannerWrapper({ children }) {
  return <div style={{ marginBottom: '24px' }}>{children}</div>;
}

function InsightsBannerInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function InsightsBanner() {
  return (
    <InsightsBannerOuter>
      <InsightsBannerContainer>
        <InsightsBannerWrapper>
          <InsightsBannerInner>
            <div data-testid="product-boundary-content-insights-notice__details-page-layout-customer-details-insights.tax-threshold-crossed-insight">
              <DeepNest depth={4}>
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
                  <DeepNest depth={3}>
                    <div style={{
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
                    }}>
                      <DeepNest depth={2}>
                        <LightbulbIcon width={16} height={16} />
                      </DeepNest>
                    </div>
                  </DeepNest>
                  <div style={{ flex: 1 }}>
                    <DeepNest depth={3}>
                      <div data-testid="insight-notice" style={{ fontSize: '14px', fontWeight: 500, color: '#1e40af', marginBottom: '4px' }}>
                        <DeepNest depth={2}>Tax registration threshold crossed</DeepNest>
                      </div>
                    </DeepNest>
                    <DeepNest depth={2}>
                      <div style={{ fontSize: '13px', color: '#3b82f6' }}>
                        This customer's purchases have crossed a tax registration threshold. Consider registering to collect tax.
                      </div>
                    </DeepNest>
                    <DeepNest depth={3}>
                      <a data-testid="insight-cta" href="#" style={{ display: 'inline-block', marginTop: '8px', fontSize: '13px', fontWeight: 500, color: '#1e40af', textDecoration: 'none' }}>
                        <DeepNest depth={2}>Learn more →</DeepNest>
                      </a>
                    </DeepNest>
                  </div>
                  <DeepNest depth={3}>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fill: '#3b82f6' }}>
                      <DeepNest depth={2}>
                        <CloseIcon width={12} height={12} />
                      </DeepNest>
                    </button>
                  </DeepNest>
                </button>
              </DeepNest>
              <div data-testid="destructive-bound-insights" />
            </div>
          </InsightsBannerInner>
        </InsightsBannerWrapper>
      </InsightsBannerContainer>
    </InsightsBannerOuter>
  );
}

// ========================================
// CUSTOMER DETAILS SUMMARY SIDEBAR
// ========================================

function DetailRowOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DetailRowContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DetailRowWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DetailRowInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DetailRowLayout({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid #e3e8ee' }}>
      {children}
    </div>
  );
}

function DetailRow({ label, value, copyable }) {
  return (
    <DetailRowOuter>
      <DetailRowContainer>
        <DetailRowWrapper>
          <DetailRowInner>
            <DetailRowLayout>
              <DeepNest depth={3}>
                <span style={{ color: '#697386', fontSize: '13px' }}>{label}</span>
              </DeepNest>
              <span style={{ color: '#1a1f36', fontSize: '13px', textAlign: 'right', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <DeepNest depth={3}>{value}</DeepNest>
                {copyable && (
                  <DeepNest depth={2}>
                    <button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fill: '#697386' }}>
                      <CopyIcon width={12} height={12} />
                    </button>
                  </DeepNest>
                )}
              </span>
            </DetailRowLayout>
          </DetailRowInner>
        </DetailRowWrapper>
      </DetailRowContainer>
    </DetailRowOuter>
  );
}

function CustomerDetailsSummary({ customer }) {
  return (
    <Card title="Details">
      <DeepNest depth={4}>
        <div>
          <DetailRow label="ID" value={customer.id} copyable />
          <DetailRow label="Email" value={customer.email} copyable />
          <DetailRow label="Created" value={customer.created} />
          <DetailRow label="Balance" value={customer.balance} />
          <DetailRow label="Currency" value={customer.currency?.toUpperCase() || '—'} />
          <DetailRow label="Default payment method" value={customer.defaultPaymentMethod || '—'} />
          <DetailRow label="Invoice prefix" value={customer.invoicePrefix || '—'} />
          <DetailRow label="Automatic tax" value={<span data-testid="automatic-tax-item">Enabled</span>} />
          <DetailRow label="Tax exempt" value={customer.taxExempt || 'None'} />
          <DetailRow label="Test clock" value={customer.testClock || 'None'} />
        </div>
      </DeepNest>
    </Card>
  );
}

function InsightsSidebar() {
  return (
    <Card title="Insights" testId="product-boundary-customer-insights">
      <DeepNest depth={4}>
        <div style={{ fontSize: '13px', color: '#697386' }}>
          <DeepNest depth={3}>No insights available for this customer.</DeepNest>
        </div>
      </DeepNest>
    </Card>
  );
}

// ========================================
// EMPTY SECTION WITH DEEP NESTING
// ========================================

function EmptySectionOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function EmptySectionContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function EmptySectionWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function EmptySectionInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function EmptySection({ title, actionLabel, actionTestId, testId }) {
  return (
    <EmptySectionOuter>
      <EmptySectionContainer>
        <EmptySectionWrapper>
          <EmptySectionInner>
            <Card title={title} actions={actionLabel && (
              <ActionButton testId={actionTestId} icon={<PlusIcon width={12} height={12} />} label={actionLabel} />
            )}>
              <DeepNest depth={4}>
                <div data-testid={testId} style={{ padding: '40px', textAlign: 'center', color: '#697386', fontSize: '14px' }}>
                  <DeepNest depth={3}>No {title.toLowerCase()} found.</DeepNest>
                </div>
              </DeepNest>
            </Card>
          </EmptySectionInner>
        </EmptySectionWrapper>
      </EmptySectionContainer>
    </EmptySectionOuter>
  );
}

// ========================================
// PAYMENT METHODS SECTION
// ========================================

function PaymentMethodsSection() {
  return (
    <Card title="Payment methods" testId="customer-payment-methods" actions={
      <ActionButton icon={<PlusIcon width={12} height={12} />} label="Add" />
    }>
      <DeepNest depth={4}>
        <div data-testid="page-module-empty-state-container" style={{ padding: '40px', textAlign: 'center' }}>
          <DeepNest depth={3}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', backgroundColor: '#f6f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DeepNest depth={2}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="#697386" strokeWidth="2"/>
                  <path d="M2 10H22" stroke="#697386" strokeWidth="2"/>
                </svg>
              </DeepNest>
            </div>
          </DeepNest>
          <DeepNest depth={2}>
            <div style={{ fontSize: '14px', color: '#697386' }}>No payment methods</div>
          </DeepNest>
          <DeepNest depth={2}>
            <div style={{ fontSize: '13px', color: '#8792a2', marginTop: '4px' }}>This customer hasn't added any payment methods yet.</div>
          </DeepNest>
        </div>
      </DeepNest>
    </Card>
  );
}

// ========================================
// RECENT ACTIVITY SECTION
// ========================================

function TimelineEventOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TimelineEventContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TimelineEventWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TimelineEventInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TimelineEvent({ title, description, time, type }) {
  const colors = { success: '#10b981', info: '#3b82f6', warning: '#f59e0b', default: '#6b7280' };

  return (
    <TimelineEventOuter>
      <TimelineEventContainer>
        <TimelineEventWrapper>
          <TimelineEventInner>
            <div data-testid="TimelineEvent__Box" style={{ display: 'flex', padding: '12px 0', borderBottom: '1px solid #e3e8ee' }}>
              <DeepNest depth={3}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors[type] || colors.default, marginTop: '6px', marginRight: '12px', flexShrink: 0 }} />
              </DeepNest>
              <div style={{ flex: 1 }}>
                <DeepNest depth={3}>
                  <div style={{ fontSize: '13px', color: '#1a1f36', marginBottom: '2px' }}>{title}</div>
                </DeepNest>
                {description && (
                  <DeepNest depth={2}>
                    <div style={{ fontSize: '13px', color: '#697386' }}>{description}</div>
                  </DeepNest>
                )}
              </div>
              <DeepNest depth={3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#8792a2' }}>
                  <DeepNest depth={2}>
                    <ClockIcon width={12} height={12} />
                  </DeepNest>
                  {time}
                </div>
              </DeepNest>
            </div>
          </TimelineEventInner>
        </TimelineEventWrapper>
      </TimelineEventContainer>
    </TimelineEventOuter>
  );
}

function RecentActivitySection({ customer }) {
  const activities = [
    { id: 1, title: 'Customer created', description: customer.email, time: 'Dec 3, 12:21 PM', type: 'success' },
    { id: 2, title: 'Subscription started', description: 'Starter Plan - $20.00/month', time: 'Dec 3, 12:22 PM', type: 'info' },
    { id: 3, title: 'Payment succeeded', description: '$20.00 USD', time: 'Dec 3, 12:22 PM', type: 'success' },
    { id: 4, title: 'Invoice paid', description: 'INV-0001', time: 'Dec 3, 12:22 PM', type: 'success' },
    { id: 5, title: 'Email sent', description: 'Payment receipt', time: 'Dec 3, 12:23 PM', type: 'info' },
    { id: 6, title: 'Subscription renewed', description: 'Starter Plan', time: 'Jan 3, 12:00 PM', type: 'success' },
    { id: 7, title: 'Payment succeeded', description: '$20.00 USD', time: 'Jan 3, 12:00 PM', type: 'success' },
    { id: 8, title: 'Invoice paid', description: 'INV-0002', time: 'Jan 3, 12:00 PM', type: 'success' },
  ];

  return (
    <Card title="Recent activity" testId="product-boundary-customer-recent-activity">
      <DeepNest depth={4}>
        <div style={{ padding: '0 16px' }}>
          {activities.map(activity => (
            <TimelineEvent key={activity.id} {...activity} />
          ))}
        </div>
      </DeepNest>
    </Card>
  );
}

// ========================================
// METADATA SECTION
// ========================================

function MetadataSection() {
  return (
    <Card title="Metadata" testId="product-boundary-customer-metadata" actions={
      <a data-testid="metadata_edit_button" href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 8px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', color: '#635bff', textDecoration: 'none', fontSize: '13px', fill: '#635bff' }}>
        <DeepNest depth={2}>
          <EditIcon width={12} height={12} />
        </DeepNest>
        <span style={{ marginLeft: '4px' }}>Edit</span>
      </a>
    }>
      <DeepNest depth={4}>
        <div data-testid="page-module-empty-state-container" style={{ padding: '20px', textAlign: 'center', color: '#697386', fontSize: '13px' }}>
          <DeepNest depth={3}>No metadata</DeepNest>
        </div>
      </DeepNest>
    </Card>
  );
}

// ========================================
// MODAL PLACEHOLDERS
// ========================================

function ModalPlaceholders() {
  const modals = [
    'product-boundary-customer-subscriptions-drawer',
    'product-boundary-customer-add-card-modal',
    'product-boundary-customer-adjust-balance-modal',
    'product-boundary-customer-change-coupon-modal',
    'product-boundary-customer-edit-customer-modal',
    'product-boundary-customer-create-payment-intent-modal',
    'product-boundary-customer-add-to-block-list-modal',
    'product-boundary-customer-add-to-allow-list-modal',
    'product-boundary-customer-remove-from-block-list-modal',
    'product-boundary-customer-remove-from-allow-list-modal',
  ];

  return (
    <>
      {modals.map(id => (
        <DeepNest key={id} depth={3}>
          <div data-testid={id} />
        </DeepNest>
      ))}
    </>
  );
}

// ========================================
// MAIN CUSTOMER DETAILS PAGE
// ========================================

function CustomerDetailsPage({ customer, subscriptions, payments, invoices, renderCounter = 0 }) {
  return (
    <PageOuter>
      <PageContainer>
        <PageWrapper>
          <PageInner>
            <PageLayout
              data-testid="product-boundary-customer-details-page"
              data-render-counter={renderCounter}
              style={{ paddingTop: '60px' }}
            >
              {/* Hidden element that changes on rerender to force DOM commit */}
              <div data-content-render={renderCounter} style={{ display: 'none' }}>
                Render: {renderCounter}
              </div>
              <DeepNest depth={3}>
                <CustomerHeader customer={customer} />
              </DeepNest>

              <div
                data-testid="bento-module-chrome"
                style={{
                  display: 'flex',
                  maxWidth: '1400px',
                  margin: '0 auto',
                  padding: '24px',
                  gap: '24px',
                }}
              >
                {/* Main content column */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <DeepNest depth={2}>
                    <InsightsBanner />
                  </DeepNest>

                  <div data-testid="product-boundary-customer-subscriptions" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={4}>
                      <ComplexSubscriptionsTable count={40} />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-payments" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={4}>
                      <ComplexPaymentsTable count={50} />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-payment-methods" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <PaymentMethodsSection />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-apps" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Apps" testId="page-module-empty-state-container" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-financial-connections" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <div data-testid="accounts-table-non-batchable">
                        <EmptySection title="Financial Connections" />
                      </div>
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-entitlements" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Entitlements" testId="page-module-empty-state-container" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-invoices" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={4}>
                      <ComplexInvoicesTable count={35} />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-pending-invoice-items" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Pending invoice items" actionLabel="Create pending invoice item" actionTestId="create-pending-invoice-item-button" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-quotes" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Quotes" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-credit-grants" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Credit grants" actionLabel="Create credit grant" actionTestId="create-credit-grant-button" testId="page-module-empty-state-container" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-invoice-credit-balance" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Invoice credit balance" testId="page-module-empty-state-container" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-verifications" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Identity verifications" testId="page-module-empty-state-container" />
                    </DeepNest>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <RecentActivitySection customer={customer} />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-sent-emails" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <div data-testid="sent-email-section">
                        <EmptySection title="Sent emails" />
                      </div>
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-logs" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Logs" />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-events" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <EmptySection title="Events" />
                    </DeepNest>
                  </div>
                </div>

                {/* Sidebar column */}
                <div style={{ width: '320px', flexShrink: 0 }}>
                  <div style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <InsightsSidebar />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-details-summary" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <CustomerDetailsSummary customer={customer} />
                    </DeepNest>
                  </div>

                  <div data-testid="product-boundary-customer-v2-accounts" style={{ marginBottom: '24px' }}>
                    <DeepNest depth={3} />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <DeepNest depth={2}>
                      <MetadataSection />
                    </DeepNest>
                  </div>
                </div>
              </div>

              <ModalPlaceholders />
            </PageLayout>
          </PageInner>
        </PageWrapper>
      </PageContainer>
    </PageOuter>
  );
}

export default memo(CustomerDetailsPage);
