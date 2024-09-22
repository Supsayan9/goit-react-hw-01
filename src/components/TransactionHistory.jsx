import './TransactionHistory.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr className="transaction-header">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="transaction-row">
            <td className="transaction-type">{type}</td>
            <td className="transaction-amount">{amount}</td>
            <td className="transaction-currency">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
