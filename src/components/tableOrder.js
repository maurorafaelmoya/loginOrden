    import * as React from "react";
    import PropTypes from "prop-types";
    import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Paper, Chip } from "@mui/material";
    import { visuallyHidden } from "@mui/utils";

    function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
    }

    function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
    // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
    // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
    // with exampleArray.slice().sort(exampleComparator)
    function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
        return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
    }

    const headCells = [
    {
        id: "id",
        label: "Order ID",
    },
    {
        id: "Customer",
        numeric: false,
        label: "Customer",
    },
    {
        id: "Date",
        numeric: false,
        label: "Date",
    },
    {
        id: "Time",
        numeric: false,
        label: "Time",
    },
    {
        id: "Mode",
        numeric: false,
        label: "Mode",
    },
    {
        id: "Total",
        label: "Total",
    },
    {
        id: "Payment",
        numeric: false,
        label: "Payment Method",
    },
    {
        id: "status",
        numeric: false,
        label: "Status",
    }
    ];

    function EnhancedTableHead(props) {
    const {
        order,
        orderBy,
        onRequestSort
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
        <TableRow>
            {headCells.map((headCell) => (
            <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                >
                {headCell.label}
                {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                ) : null}
                </TableSortLabel>
            </TableCell>
            ))}
        </TableRow>
        </TableHead>
    );
    }

    EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
    };

    export default function TableOrdens(props) {
    const [data, setData] = React.useState(props.row);

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = React.useMemo(
        () =>
        stableSort(data, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
            >
                <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                />
                <TableBody>
                {visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                    <TableRow
                        hover
                        tabIndex={-1}
                        key={row.id}
                        sx={{ cursor: "pointer" }}
                    >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.Customer}</TableCell>
                        <TableCell>{row.Date}</TableCell>
                        <TableCell>{row.Time}</TableCell>
                        <TableCell>{row.Mode}</TableCell>
                        <TableCell>{row.Total}</TableCell>
                        <TableCell>{row.Payment}</TableCell>
                        <TableCell>
                            {row.Status === true ? (
                                <Chip
                                label="Accepted"
                                style={{
                                    backgroundColor: "#0F6A09",
                                    color: "#fff",
                                }}
                                />
                            ) : (
                                <Chip
                                    style={{
                                        backgroundColor: "#BF1D1D",
                                        color: "#fff",
                                    }}
                                    label="Rejected" />
                            )
                            }</TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </Box>
    );
    }
