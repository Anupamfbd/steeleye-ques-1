

import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, rowsec, selectcurrency}) => {

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectcurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>

        {rows.map((row, rowIndex) => (
          <ListRow key={row["&id"]}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>

            {rowsec[rowIndex] && (
              <ListRowCell>{rowsec[rowIndex].timestamps.orderSubmitted}</ListRowCell>
            )}

            <ListRowCell>{row.bestExecutionData.orderVolume[selectcurrency]}</ListRowCell>
          </ListRow>

        ))}

      </tbody>
    </table>
  );
};

export default List;
