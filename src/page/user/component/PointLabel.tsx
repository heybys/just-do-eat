import React, { PropsWithChildren } from 'react';
import './point-label.css';

interface PointLabelProps extends PropsWithChildren {
  pointType?: 'check' | 'circle' | 'pencil';
  required?: boolean;
}

const PointLabel = ({ pointType = 'circle', required = false, children }: PointLabelProps) => {
  const pointEmoticon = (() => {
    switch (pointType) {
      case 'check':
        return '✔';
      case 'circle':
        return '•';
      case 'pencil':
        return '✎';
      default:
        return '';
    }
  })();
  return (
    <label className="point-label">
      <span className="point">{pointEmoticon}</span>&nbsp;
      <span className="children">{children}</span>
      {required && <span className="required"> *</span>}
    </label>
  );
};

export default PointLabel;
