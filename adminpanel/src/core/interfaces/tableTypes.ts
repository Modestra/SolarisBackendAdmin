export interface TableConfig {
    columns: TableField[],
    tableStyle?: string,
    isEdit: boolean,
}

export interface TableField {
    field: string,
    column: string,
    columnType?: string
}