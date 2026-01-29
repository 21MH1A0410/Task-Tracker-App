import React from 'react';

export function ProgressBar({ progress }) {
    const styles = {
        container: {
            height: '8px',
            width: '100%',
            backgroundColor: 'var(--border)',
            borderRadius: '99px',
            overflow: 'hidden',
            marginBottom: '2rem'
        },
        fill: {
            height: '100%',
            width: `${progress}%`,
            backgroundColor: 'var(--success)',
            borderRadius: '99px',
            transition: 'width 0.5s ease-out'
        },
        message: {
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginBottom: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between'
        }
    };

    return (
        <div>
            <div style={styles.message}>
                <span>Daily Progress</span>
                <span>{progress}%</span>
            </div>
            <div style={styles.container}>
                <div style={styles.fill} />
            </div>
        </div>
    );
}
