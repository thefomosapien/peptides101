export default function FDABadge({ approved }) {
  const style = {
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: 8,
    fontFamily: 'var(--font-body)',
    background: approved ? '#E8F9F1' : 'var(--amber-light)',
    color: approved ? '#0D7C66' : 'var(--amber)',
  };

  return <span style={style}>{approved ? 'FDA Approved' : 'Not FDA Approved'}</span>;
}
