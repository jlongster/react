import React from 'react';

// Deeply nested wrapper components for artificial complexity

export function FlexContainer({ children, direction = 'row', align, justify, gap, wrap, style, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: direction, alignItems: align, justifyContent: justify, gap, flexWrap: wrap, ...style }} {...props}>
      <FlexInner>{children}</FlexInner>
    </div>
  );
}

function FlexInner({ children }) {
  return <div style={{ display: 'contents' }}><FlexContent>{children}</FlexContent></div>;
}

function FlexContent({ children }) {
  return <>{children}</>;
}

export function Box({ children, padding, margin, bg, border, radius, style, ...props }) {
  return (
    <div style={{ padding, margin, backgroundColor: bg, border, borderRadius: radius, ...style }} {...props}>
      <BoxInner>
        <BoxContent>
          <BoxWrapper>{children}</BoxWrapper>
        </BoxContent>
      </BoxInner>
    </div>
  );
}

function BoxInner({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function BoxContent({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function BoxWrapper({ children }) {
  return <>{children}</>;
}

export function Card({ children, title, actions, testId, style }) {
  return (
    <CardOuter data-testid={testId} style={style}>
      <CardContainer>
        <CardBorder>
          <CardBackground>
            <CardPadding>
              <CardLayout>
                {title && (
                  <CardHeader>
                    <CardHeaderContent>
                      <CardTitle>{title}</CardTitle>
                      {actions && <CardActions>{actions}</CardActions>}
                    </CardHeaderContent>
                  </CardHeader>
                )}
                <CardBody>
                  <CardBodyInner>
                    <CardContent>{children}</CardContent>
                  </CardBodyInner>
                </CardBody>
              </CardLayout>
            </CardPadding>
          </CardBackground>
        </CardBorder>
      </CardContainer>
    </CardOuter>
  );
}

function CardOuter({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function CardContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function CardBorder({ children }) {
  return <div style={{ border: '1px solid #e3e8ee', borderRadius: '8px', overflow: 'hidden' }}>{children}</div>;
}

function CardBackground({ children }) {
  return <div style={{ backgroundColor: '#fff' }}>{children}</div>;
}

function CardPadding({ children }) {
  return <div>{children}</div>;
}

function CardLayout({ children }) {
  return <div>{children}</div>;
}

function CardHeader({ children }) {
  return <div style={{ padding: '16px', borderBottom: '1px solid #e3e8ee' }}>{children}</div>;
}

function CardHeaderContent({ children }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{children}</div>;
}

function CardTitle({ children }) {
  return (
    <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#1a1f36' }}>
      <TextWrapper><TextInner>{children}</TextInner></TextWrapper>
    </h3>
  );
}

function CardActions({ children }) {
  return <div style={{ display: 'flex', gap: '8px' }}>{children}</div>;
}

function CardBody({ children }) {
  return <div>{children}</div>;
}

function CardBodyInner({ children }) {
  return <div>{children}</div>;
}

function CardContent({ children }) {
  return <>{children}</>;
}

export function Text({ children, size = '14px', color = '#1a1f36', weight = 'normal', style, as: Component = 'span' }) {
  return (
    <Component style={{ fontSize: size, color, fontWeight: weight, ...style }}>
      <TextWrapper>
        <TextInner>
          <TextContent>{children}</TextContent>
        </TextInner>
      </TextWrapper>
    </Component>
  );
}

function TextWrapper({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function TextInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function TextContent({ children }) {
  return <>{children}</>;
}

export function Button({ children, variant = 'default', size = 'medium', icon, testId, onClick, style }) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: size === 'small' ? '13px' : '14px',
    padding: size === 'small' ? '6px 10px' : '8px 12px',
  };

  const variants = {
    default: { backgroundColor: '#fff', border: '1px solid #e3e8ee', color: '#1a1f36' },
    primary: { backgroundColor: '#635bff', color: '#fff' },
    ghost: { backgroundColor: 'transparent', color: '#635bff' },
  };

  return (
    <ButtonOuter>
      <ButtonContainer>
        <ButtonElement
          data-testid={testId}
          onClick={onClick}
          style={{ ...baseStyle, ...variants[variant], ...style }}
        >
          <ButtonContent>
            <ButtonInner>
              {icon && <ButtonIcon>{icon}</ButtonIcon>}
              {children && <ButtonLabel>{children}</ButtonLabel>}
            </ButtonInner>
          </ButtonContent>
        </ButtonElement>
      </ButtonContainer>
    </ButtonOuter>
  );
}

function ButtonOuter({ children }) {
  return <span style={{ display: 'inline-flex' }}>{children}</span>;
}

function ButtonContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ButtonElement({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

function ButtonContent({ children }) {
  return <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{children}</span>;
}

function ButtonInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function ButtonIcon({ children }) {
  return <span style={{ display: 'flex', alignItems: 'center' }}>{children}</span>;
}

function ButtonLabel({ children }) {
  return <span>{children}</span>;
}

export function Link({ children, href = '#', testId, style }) {
  return (
    <LinkOuter>
      <LinkContainer>
        <LinkElement data-testid={testId} href={href} style={{ color: '#635bff', textDecoration: 'none', ...style }}>
          <LinkContent>
            <LinkInner>
              <LinkText>{children}</LinkText>
            </LinkInner>
          </LinkContent>
        </LinkElement>
      </LinkContainer>
    </LinkOuter>
  );
}

function LinkOuter({ children }) {
  return <span style={{ display: 'inline' }}>{children}</span>;
}

function LinkContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function LinkElement({ children, ...props }) {
  return <a {...props}>{children}</a>;
}

function LinkContent({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function LinkInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function LinkText({ children }) {
  return <>{children}</>;
}

export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: { backgroundColor: '#f6f8fa', color: '#697386' },
    success: { backgroundColor: '#d1fae5', color: '#065f46' },
    warning: { backgroundColor: '#fef3c7', color: '#92400e' },
    error: { backgroundColor: '#fee2e2', color: '#991b1b' },
    info: { backgroundColor: '#dbeafe', color: '#1e40af' },
  };

  return (
    <BadgeOuter>
      <BadgeContainer>
        <BadgeElement style={{
          display: 'inline-flex',
          padding: '2px 8px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 500,
          ...variants[variant],
        }}>
          <BadgeContent>
            <BadgeInner>
              <BadgeText>{children}</BadgeText>
            </BadgeInner>
          </BadgeContent>
        </BadgeElement>
      </BadgeContainer>
    </BadgeOuter>
  );
}

function BadgeOuter({ children }) {
  return <span style={{ display: 'inline-flex' }}>{children}</span>;
}

function BadgeContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BadgeElement({ children, style }) {
  return <span style={style}>{children}</span>;
}

function BadgeContent({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BadgeInner({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function BadgeText({ children }) {
  return <>{children}</>;
}

export function Icon({ children, size = 16, color }) {
  return (
    <IconOuter>
      <IconContainer>
        <IconElement style={{ display: 'inline-flex', width: size, height: size, fill: color }}>
          <IconContent>
            <IconInner>{children}</IconInner>
          </IconContent>
        </IconElement>
      </IconContainer>
    </IconOuter>
  );
}

function IconOuter({ children }) {
  return <span style={{ display: 'inline-flex' }}>{children}</span>;
}

function IconContainer({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function IconElement({ children, style }) {
  return <span style={style}>{children}</span>;
}

function IconContent({ children }) {
  return <span style={{ display: 'contents' }}>{children}</span>;
}

function IconInner({ children }) {
  return <>{children}</>;
}

export function List({ children, gap = '0px' }) {
  return (
    <ListOuter>
      <ListContainer>
        <ListElement style={{ display: 'flex', flexDirection: 'column', gap }}>
          <ListContent>
            <ListInner>{children}</ListInner>
          </ListContent>
        </ListElement>
      </ListContainer>
    </ListOuter>
  );
}

function ListOuter({ children }) {
  return <div>{children}</div>;
}

function ListContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ListElement({ children, style }) {
  return <div style={style}>{children}</div>;
}

function ListContent({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ListInner({ children }) {
  return <>{children}</>;
}

export function ListItem({ children }) {
  return (
    <ListItemOuter>
      <ListItemContainer>
        <ListItemElement>
          <ListItemContent>
            <ListItemInner>{children}</ListItemInner>
          </ListItemContent>
        </ListItemElement>
      </ListItemContainer>
    </ListItemOuter>
  );
}

function ListItemOuter({ children }) {
  return <div>{children}</div>;
}

function ListItemContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ListItemElement({ children }) {
  return <div>{children}</div>;
}

function ListItemContent({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function ListItemInner({ children }) {
  return <>{children}</>;
}

export function Divider() {
  return (
    <DividerOuter>
      <DividerContainer>
        <DividerElement style={{ height: '1px', backgroundColor: '#e3e8ee', width: '100%' }}>
          <DividerInner />
        </DividerElement>
      </DividerContainer>
    </DividerOuter>
  );
}

function DividerOuter({ children }) {
  return <div>{children}</div>;
}

function DividerContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function DividerElement({ children, style }) {
  return <div style={style}>{children}</div>;
}

function DividerInner() {
  return null;
}

export function Spacer({ size = '16px' }) {
  return (
    <SpacerOuter>
      <SpacerContainer>
        <SpacerElement style={{ height: size, width: size }}>
          <SpacerInner />
        </SpacerElement>
      </SpacerContainer>
    </SpacerOuter>
  );
}

function SpacerOuter({ children }) {
  return <div style={{ display: 'flex' }}>{children}</div>;
}

function SpacerContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function SpacerElement({ children, style }) {
  return <div style={style}>{children}</div>;
}

function SpacerInner() {
  return null;
}

// Deep nesting utility - creates N levels of wrapper divs
export function DeepNest({ depth = 10, children }) {
  if (depth <= 0) return <>{children}</>;
  return (
    <div style={{ display: 'contents' }}>
      <span style={{ display: 'contents' }}>
        <DeepNest depth={depth - 1}>{children}</DeepNest>
      </span>
    </div>
  );
}

// Grid layout with deep nesting
export function Grid({ children, columns = 1, gap = '16px' }) {
  return (
    <GridOuter>
      <GridContainer>
        <GridLayout style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }}>
          <GridContent>
            <GridInner>{children}</GridInner>
          </GridContent>
        </GridLayout>
      </GridContainer>
    </GridOuter>
  );
}

function GridOuter({ children }) {
  return <div>{children}</div>;
}

function GridContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function GridLayout({ children, style }) {
  return <div style={style}>{children}</div>;
}

function GridContent({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function GridInner({ children }) {
  return <>{children}</>;
}

export function GridItem({ children }) {
  return (
    <GridItemOuter>
      <GridItemContainer>
        <GridItemElement>
          <GridItemContent>
            <GridItemInner>{children}</GridItemInner>
          </GridItemContent>
        </GridItemElement>
      </GridItemContainer>
    </GridItemOuter>
  );
}

function GridItemOuter({ children }) {
  return <div>{children}</div>;
}

function GridItemContainer({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function GridItemElement({ children }) {
  return <div>{children}</div>;
}

function GridItemContent({ children }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

function GridItemInner({ children }) {
  return <>{children}</>;
}
