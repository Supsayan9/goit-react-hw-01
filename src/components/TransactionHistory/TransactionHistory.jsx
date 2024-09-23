import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-table']}>
      <thead>
        <tr className={styles['transaction-header']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles['transaction-row']}>
            <td className={styles['transaction-type']}>{type}</td>
            <td className={styles['transaction-amount']}>{amount}</td>
            <td className={styles['transaction-currency']}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
