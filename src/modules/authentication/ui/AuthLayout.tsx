import { useState, useEffect } from 'react';
import {
  layoutPage,
  layoutGlow,
  layoutLeftColumn,
  layoutLogoRow,
  layoutMobileLogoRow,
  layoutLogoMark,
  layoutLogoText,
  layoutTitle,
  layoutDescription,
  layoutStatsRow,
  layoutStatValue,
  layoutStatLabel,
  layoutCopyright,
  layoutRightColumn,
  layoutCard,
} from '../styles.js';

interface IProps {
  title: string;
  description: string;
  stats?: { value: string; label: string }[];
  children: React.ReactNode;
}

function AuthLayout({ title, description, stats, children }: IProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={layoutPage as React.CSSProperties}>
      <div style={layoutGlow as React.CSSProperties}></div>

      {!isMobile && (
        <div style={layoutLeftColumn as React.CSSProperties}>
          <div style={layoutLogoRow as React.CSSProperties}>
            <div style={layoutLogoMark as React.CSSProperties}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06130B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <span style={layoutLogoText as React.CSSProperties}>Todo.</span>
          </div>

          <div>
            <h1 style={layoutTitle as React.CSSProperties}>{title}</h1>
            <p style={layoutDescription as React.CSSProperties}>{description}</p>
            {stats && (
              <div style={layoutStatsRow as React.CSSProperties}>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div style={layoutStatValue as React.CSSProperties}>{stat.value}</div>
                    <div style={layoutStatLabel as React.CSSProperties}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={layoutCopyright as React.CSSProperties}>© 2026 Todo.</div>
        </div>
      )}

      <div style={layoutRightColumn as React.CSSProperties}>
        {isMobile && (
          <div style={layoutMobileLogoRow as React.CSSProperties}>
            <div style={layoutLogoMark as React.CSSProperties}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06130B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <span style={layoutLogoText as React.CSSProperties}>Todo.</span>
          </div>
        )}
        <div style={layoutCard as React.CSSProperties}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;