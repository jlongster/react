import React from 'react';
import { Box, Text, Badge, Button, Icon, DeepNest, FlexContainer } from './Wrappers';
import { MoreDotsIcon, CopyIcon, ChevronRightIcon } from './Icons';

// Deeply nested table cell components
function TableCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableCellWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableCellInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableCellContent({ children, style }) {
  return <td style={{ padding: '12px 16px', borderBottom: '1px solid #e3e8ee', ...style }}>{children}</td>;
}

function TableCell({ children, style }) {
  return (
    <TableCellOuter>
      <TableCellContainer>
        <TableCellWrapper>
          <TableCellInner>
            <TableCellContent style={style}>
              <DeepNest depth={3}>{children}</DeepNest>
            </TableCellContent>
          </TableCellInner>
        </TableCellWrapper>
      </TableCellContainer>
    </TableCellOuter>
  );
}

function TableHeaderCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableHeaderCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableHeaderCellWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableHeaderCellInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableHeaderCellContent({ children, style }) {
  return (
    <th style={{
      padding: '8px 16px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: 500,
      color: '#697386',
      borderBottom: '1px solid #e3e8ee',
      backgroundColor: '#f6f8fa',
      ...style,
    }}>
      {children}
    </th>
  );
}

function TableHeaderCell({ children, style }) {
  return (
    <TableHeaderCellOuter>
      <TableHeaderCellContainer>
        <TableHeaderCellWrapper>
          <TableHeaderCellInner>
            <TableHeaderCellContent style={style}>
              <DeepNest depth={2}>{children}</DeepNest>
            </TableHeaderCellContent>
          </TableHeaderCellInner>
        </TableHeaderCellWrapper>
      </TableHeaderCellContainer>
    </TableHeaderCellOuter>
  );
}

function TableRowOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableRowContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableRowWrapper({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableRowInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableRowElement({ children }) {
  return <tr>{children}</tr>;
}

function TableRow({ children }) {
  return (
    <TableRowOuter>
      <TableRowContainer>
        <TableRowWrapper>
          <TableRowInner>
            <TableRowElement>{children}</TableRowElement>
          </TableRowInner>
        </TableRowWrapper>
      </TableRowContainer>
    </TableRowOuter>
  );
}

// Complex ID cell with copy button and link
function IdCell({ id }) {
  return (
    <TableCell>
      <FlexContainer align="center" gap="8px">
        <IdCellLink href="#">
          <IdCellLinkInner>
            <IdCellLinkText>
              <Text size="13px" color="#635bff">{id}</Text>
            </IdCellLinkText>
          </IdCellLinkInner>
        </IdCellLink>
        <IdCellActions>
          <IdCellCopyButton>
            <Button variant="ghost" size="small" icon={<CopyIcon width={12} height={12} />} />
          </IdCellCopyButton>
        </IdCellActions>
      </FlexContainer>
    </TableCell>
  );
}

function IdCellLink({ children, href }) {
  return <a href={href} style={{ textDecoration: 'none' }}>{children}</a>;
}

function IdCellLinkInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function IdCellLinkText({ children }) {
  return <span>{children}</span>;
}

function IdCellActions({ children }) {
  return <span style={{ display: 'flex', gap: '4px' }}>{children}</span>;
}

function IdCellCopyButton({ children }) {
  return <span>{children}</span>;
}

// Status cell with badge
function StatusCell({ status }) {
  const variant = status === 'active' || status === 'succeeded' || status === 'paid' ? 'success' :
                  status === 'pending' ? 'warning' : 'error';
  return (
    <TableCell>
      <StatusCellOuter>
        <StatusCellContainer>
          <StatusCellWrapper>
            <Badge variant={variant}>{status}</Badge>
          </StatusCellWrapper>
        </StatusCellContainer>
      </StatusCellOuter>
    </TableCell>
  );
}

function StatusCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function StatusCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function StatusCellWrapper({ children }) {
  return <div>{children}</div>;
}

// Amount cell with currency
function AmountCell({ amount, currency = 'USD' }) {
  return (
    <TableCell>
      <AmountCellOuter>
        <AmountCellContainer>
          <AmountCellWrapper>
            <AmountCellAmount>
              <Text size="13px" weight="500">{amount}</Text>
            </AmountCellAmount>
            <AmountCellCurrency>
              <Text size="13px" color="#697386"> {currency}</Text>
            </AmountCellCurrency>
          </AmountCellWrapper>
        </AmountCellContainer>
      </AmountCellOuter>
    </TableCell>
  );
}

function AmountCellOuter({ children }) {
  return <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>;
}

function AmountCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function AmountCellWrapper({ children }) {
  return <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>;
}

function AmountCellAmount({ children }) {
  return <span>{children}</span>;
}

function AmountCellCurrency({ children }) {
  return <span>{children}</span>;
}

// Text cell
function TextCell({ children }) {
  return (
    <TableCell>
      <TextCellOuter>
        <TextCellContainer>
          <TextCellWrapper>
            <TextCellContent>
              <Text size="13px">{children}</Text>
            </TextCellContent>
          </TextCellWrapper>
        </TextCellContainer>
      </TextCellOuter>
    </TableCell>
  );
}

function TextCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TextCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TextCellWrapper({ children }) {
  return <div>{children}</div>;
}

function TextCellContent({ children }) {
  return <span>{children}</span>;
}

// Date cell
function DateCell({ date }) {
  return (
    <TableCell>
      <DateCellOuter>
        <DateCellContainer>
          <DateCellWrapper>
            <DateCellContent>
              <Text size="13px" color="#697386">{date}</Text>
            </DateCellContent>
          </DateCellWrapper>
        </DateCellContainer>
      </DateCellOuter>
    </TableCell>
  );
}

function DateCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DateCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DateCellWrapper({ children }) {
  return <div>{children}</div>;
}

function DateCellContent({ children }) {
  return <span>{children}</span>;
}

// Actions cell
function ActionsCell() {
  return (
    <TableCell style={{ width: '48px' }}>
      <ActionsCellOuter>
        <ActionsCellContainer>
          <ActionsCellWrapper>
            <ActionsCellContent>
              <Button
                variant="default"
                size="small"
                icon={<MoreDotsIcon width={12} height={12} />}
                style={{ width: '28px', height: '28px', padding: 0 }}
              />
            </ActionsCellContent>
          </ActionsCellWrapper>
        </ActionsCellContainer>
      </ActionsCellOuter>
    </TableCell>
  );
}

function ActionsCellOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ActionsCellContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ActionsCellWrapper({ children }) {
  return <div>{children}</div>;
}

function ActionsCellContent({ children }) {
  return <span>{children}</span>;
}

// Generate fake data
function generateSubscriptions(count) {
  const statuses = ['active', 'canceled', 'past_due', 'trialing'];
  const products = ['Starter Plan', 'Pro Plan', 'Enterprise Plan', 'Basic Plan', 'Premium Plan'];
  const amounts = ['$10.00', '$20.00', '$50.00', '$99.00', '$199.00', '$499.00'];
  const intervals = ['month', 'year', 'week'];

  return Array.from({ length: count }, (_, i) => ({
    id: `sub_${Math.random().toString(36).substr(2, 24)}`,
    status: statuses[i % statuses.length],
    product: products[i % products.length],
    amount: amounts[i % amounts.length],
    interval: intervals[i % intervals.length],
    currentPeriodEnd: `Jan ${(i % 28) + 1}, 2025`,
    created: `Dec ${(i % 28) + 1}, 2024`,
  }));
}

function generatePayments(count) {
  const statuses = ['succeeded', 'pending', 'failed', 'refunded'];
  const descriptions = ['Subscription payment', 'One-time purchase', 'Invoice payment', 'Setup fee', 'Addon purchase'];
  const methods = ['Visa •••• 4242', 'Mastercard •••• 5555', 'Amex •••• 0005', 'Discover •••• 1111'];
  const amounts = ['$10.00', '$20.00', '$50.00', '$99.00', '$199.00', '$499.00', '$1,000.00'];

  return Array.from({ length: count }, (_, i) => ({
    id: `pi_${Math.random().toString(36).substr(2, 24)}`,
    amount: amounts[i % amounts.length],
    status: statuses[i % statuses.length],
    description: descriptions[i % descriptions.length],
    paymentMethod: methods[i % methods.length],
    created: `Dec ${(i % 28) + 1}, 2024, ${((i % 12) + 1)}:${(i % 60).toString().padStart(2, '0')} PM`,
  }));
}

function generateInvoices(count) {
  const statuses = ['paid', 'open', 'draft', 'void', 'uncollectible'];
  const amounts = ['$10.00', '$20.00', '$50.00', '$99.00', '$199.00', '$499.00'];

  return Array.from({ length: count }, (_, i) => ({
    id: `in_${Math.random().toString(36).substr(2, 24)}`,
    number: `INV-${(1000 + i).toString().padStart(4, '0')}`,
    amount: amounts[i % amounts.length],
    status: statuses[i % statuses.length],
    dueDate: `Jan ${(i % 28) + 1}, 2025`,
    created: `Dec ${(i % 28) + 1}, 2024`,
  }));
}

// Complex Subscriptions Table
export function ComplexSubscriptionsTable({ count = 20 }) {
  const subscriptions = generateSubscriptions(count);

  return (
    <ComplexTableWrapper testId="customer-subscriptions" title="Subscriptions">
      <TableOuter>
        <TableContainer>
          <TableElement>
            <TableHead>
              <TableHeadInner>
                <thead data-testid="inline-table-header">
                  <TableRow>
                    <TableHeaderCell>SUBSCRIPTION</TableHeaderCell>
                    <TableHeaderCell>STATUS</TableHeaderCell>
                    <TableHeaderCell>PRODUCT</TableHeaderCell>
                    <TableHeaderCell>AMOUNT</TableHeaderCell>
                    <TableHeaderCell>CURRENT PERIOD END</TableHeaderCell>
                    <TableHeaderCell style={{ width: '48px' }} />
                  </TableRow>
                </thead>
              </TableHeadInner>
            </TableHead>
            <TableBody>
              <TableBodyInner>
                <tbody data-testid="table-body">
                  {subscriptions.map(sub => (
                    <SubscriptionRow key={sub.id} subscription={sub} />
                  ))}
                </tbody>
              </TableBodyInner>
            </TableBody>
          </TableElement>
        </TableContainer>
      </TableOuter>
    </ComplexTableWrapper>
  );
}

function SubscriptionRow({ subscription }) {
  return (
    <TableRow>
      <IdCell id={subscription.id} />
      <StatusCell status={subscription.status} />
      <TextCell>{subscription.product}</TextCell>
      <TableCell>
        <Text size="13px">{subscription.amount} / {subscription.interval}</Text>
      </TableCell>
      <DateCell date={subscription.currentPeriodEnd} />
      <ActionsCell />
    </TableRow>
  );
}

// Complex Payments Table
export function ComplexPaymentsTable({ count = 25 }) {
  const payments = generatePayments(count);

  return (
    <ComplexTableWrapper testId="customer-payments" title="Payments">
      <TableOuter>
        <TableContainer>
          <TableElement>
            <TableHead>
              <TableHeadInner>
                <thead>
                  <TableRow>
                    <TableHeaderCell>AMOUNT</TableHeaderCell>
                    <TableHeaderCell>STATUS</TableHeaderCell>
                    <TableHeaderCell>DESCRIPTION</TableHeaderCell>
                    <TableHeaderCell>PAYMENT METHOD</TableHeaderCell>
                    <TableHeaderCell>DATE</TableHeaderCell>
                    <TableHeaderCell style={{ width: '48px' }} />
                  </TableRow>
                </thead>
              </TableHeadInner>
            </TableHead>
            <TableBody>
              <TableBodyInner>
                <tbody data-testid="table-body">
                  {payments.map(payment => (
                    <PaymentRow key={payment.id} payment={payment} />
                  ))}
                </tbody>
              </TableBodyInner>
            </TableBody>
          </TableElement>
        </TableContainer>
      </TableOuter>
    </ComplexTableWrapper>
  );
}

function PaymentRow({ payment }) {
  return (
    <TableRow>
      <AmountCell amount={payment.amount} />
      <StatusCell status={payment.status} />
      <TextCell>{payment.description}</TextCell>
      <TextCell>{payment.paymentMethod}</TextCell>
      <DateCell date={payment.created} />
      <ActionsCell />
    </TableRow>
  );
}

// Complex Invoices Table
export function ComplexInvoicesTable({ count = 15 }) {
  const invoices = generateInvoices(count);

  return (
    <ComplexTableWrapper title="Invoices">
      <TableOuter>
        <TableContainer>
          <TableElement>
            <TableHead>
              <TableHeadInner>
                <thead data-testid="inline-table-header">
                  <TableRow>
                    <TableHeaderCell>NUMBER</TableHeaderCell>
                    <TableHeaderCell>AMOUNT</TableHeaderCell>
                    <TableHeaderCell>STATUS</TableHeaderCell>
                    <TableHeaderCell>DUE DATE</TableHeaderCell>
                    <TableHeaderCell>CREATED</TableHeaderCell>
                    <TableHeaderCell style={{ width: '48px' }} />
                  </TableRow>
                </thead>
              </TableHeadInner>
            </TableHead>
            <TableBody>
              <TableBodyInner>
                <tbody data-testid="table-body">
                  {invoices.map(invoice => (
                    <InvoiceRow key={invoice.id} invoice={invoice} />
                  ))}
                </tbody>
              </TableBodyInner>
            </TableBody>
          </TableElement>
        </TableContainer>
      </TableOuter>
    </ComplexTableWrapper>
  );
}

function InvoiceRow({ invoice }) {
  return (
    <TableRow>
      <IdCell id={invoice.number} />
      <AmountCell amount={invoice.amount} />
      <StatusCell status={invoice.status} />
      <DateCell date={invoice.dueDate} />
      <DateCell date={invoice.created} />
      <ActionsCell />
    </TableRow>
  );
}

// Table wrapper components
function ComplexTableWrapper({ children, testId, title }) {
  return (
    <div data-testid={testId} style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e3e8ee', overflow: 'hidden' }}>
      <TableWrapperOuter>
        <TableWrapperContainer>
          <TableWrapperInner>
            <TableWrapperHeader>
              <TableWrapperHeaderContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #e3e8ee' }}>
                <TableWrapperTitle>
                  <Text size="14px" weight="600">{title}</Text>
                </TableWrapperTitle>
              </TableWrapperHeaderContent>
            </TableWrapperHeader>
            <TableWrapperBody>
              <TableWrapperBodyContent>{children}</TableWrapperBodyContent>
            </TableWrapperBody>
          </TableWrapperInner>
        </TableWrapperContainer>
      </TableWrapperOuter>
    </div>
  );
}

function TableWrapperOuter({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableWrapperContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableWrapperInner({ children }) {
  return <div>{children}</div>;
}

function TableWrapperHeader({ children }) {
  return <div>{children}</div>;
}

function TableWrapperHeaderContent({ children, style }) {
  return <div style={style}>{children}</div>;
}

function TableWrapperTitle({ children }) {
  return <h3 style={{ margin: 0 }}>{children}</h3>;
}

function TableWrapperBody({ children }) {
  return <div>{children}</div>;
}

function TableWrapperBodyContent({ children }) {
  return <div>{children}</div>;
}

function TableOuter({ children }) {
  return <div style={{ overflowX: 'auto' }}>{children}</div>;
}

function TableContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableElement({ children }) {
  return <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>;
}

function TableHead({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableHeadInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableBody({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function TableBodyInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}
