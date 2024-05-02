export default function SeverityBadge({ severityAmount }) {
  const style = {
    padding: '3px 9px',
    color: 'white',
    borderRadius: '10rem',
    display: 'inline-block',
    fontSize: '.95rem',
  };

  function showTheRightBadge(severity) {
    if (severity === 0) {
      return (
        <div style={{ ...style, backgroundColor: '#000000' }}>Blocker</div>
      );
    } else if (severity <= 2) {
      return (
        <div style={{ ...style, backgroundColor: 'rgb(120,0,0)' }}>
          Critical
        </div>
      );
    } else if (severity > 2 && severity <= 4) {
      return (
        <div style={{ ...style, backgroundColor: 'rgb(220,0,0)' }}>
          Significant
        </div>
      );
    } else if (severity > 4 && severity <= 6) {
      return (
        <div style={{ ...style, backgroundColor: 'rgb(253,140,0)' }}>
          Moderate
        </div>
      );
    } else if (severity > 6 && severity <= 8) {
      return (
        <div style={{ ...style, backgroundColor: 'rgb(253,197,0)' }}>Minor</div>
      );
    } else if (severity > 8 && severity <= 10) {
      return (
        <div style={{ ...style, backgroundColor: 'rgb(0,172,70)' }}>None</div>
      );
    }
  }

  return showTheRightBadge(severityAmount);
}
