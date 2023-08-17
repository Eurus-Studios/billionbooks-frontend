import React from 'react';
import PDetails from '@/app/prDetails/page';

const QuickView = ({ product, onClose }) => {
  console.log(product)
  return (
    <div className="quick-view-container">
      <div className="quick-view-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur, facere maiores tenetur a similique recusandae quas fugit voluptates ea?
        <div className="quick-view-title">{product.title}</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum quidem fuga dolore sed et, magnam dolorem debitis accusantium provident qui? Sed assumenda labore optio amet numquam laboriosam illum, rem hic tenetur quaerat cupiditate officiis totam suscipit praesentium tempora. Non.
      </div>
      <div className="quick-view-close" onClick={onClose}>
        Close
      </div>
    </div>
  );
};

export default QuickView;
