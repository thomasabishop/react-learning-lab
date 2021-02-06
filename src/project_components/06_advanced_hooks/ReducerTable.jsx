import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

function ReducerTable(props) {
  return (
    <TableContainer
      variant="outlined"
      style={{ marginTop: "1rem" }}
      component={Paper}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Direct Costs</TableCell>
            <TableCell>Year 1</TableCell>
            <TableCell>Year 2</TableCell>
            <TableCell>Year 3</TableCell>
            <TableCell>Year 4</TableCell>
            <TableCell>Lifetime cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {props.data.map((datum, index) => (
              <TableCell key={index}>{datum}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReducerTable;
