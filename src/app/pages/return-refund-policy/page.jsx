import React from 'react';
import Wrapper from '@/components/Wrapper';

const ReturnPolicy = () => {
  return (
    <Wrapper className="popinsfont">
      
      <p className="mb-6 mt-5">
        Thank you for choosing BILLIONBOOKS Pvt Ltd. for your purchase. We sincerely hope that you are delighted with your order.
        However, if for any reason you are not completely satisfied, we offer an exchange-only return policy.
        Kindly review the information below for details on our return process:
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">RETURNS:</h2>
      <p className="mb-6">
        All returns must be postmarked within two (2) days of the purchase date.
        The returned items must be in new and unused condition, with all original tags and labels attached.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">RETURN PROCESS:</h2>
      <p className="mb-6">
        To initiate a return, please contact our customer service at info@thebillionbooks.com to obtain a Return Merchandise Authorization (RMA) number.
        Once you have the RMA number, securely package the item in its original packaging and send the return to the following address:
      </p>

      <p className="mb-6">
        We will cover the return shipping charges, and your refund will be processed once we receive and inspect the condition of the item.
        Please allow at least six (6) days from receipt for us to process your exchange. You will receive an email notification once your return has been processed.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">EXCEPTIONS:</h2>
      <p className="mb-6">
        For any defective or damaged products, please contact us at the customer service number below to arrange a refund or exchange.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">QUESTIONS:</h2>
      <p>
        If you have any inquiries regarding our return policy, feel free to contact us at:
      </p>
      <p className="mb-6">
        Phone: 8051563519<br />
        Email: info@thebillionbooks.com
      </p>
    </Wrapper>
  );
};

export default ReturnPolicy;
