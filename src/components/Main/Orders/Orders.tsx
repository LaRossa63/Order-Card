import Table, { ColumnsType } from 'antd/es/table';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react';
import { handleChangeSelectionOrder } from 'store/slice';
import { IOrders } from 'types';

const columns: ColumnsType<IOrders> = [
  {
    title: 'Номер заявки',
    dataIndex: 'key',
  },
  {
    title: 'Координаты ОТ lat',
    dataIndex: 'startLat',
  },
  {
    title: 'Координаты ОТ ing',
    dataIndex: 'startIng',
  },
  {
    title: 'Координаты ДО lat',
    dataIndex: 'endLat',
  },
  {
    title: 'Координаты ОТ ing',
    dataIndex: 'endIng',
  },
];

export const Orders = () => {
  const dispatch = useAppDispatch();
  const orderList = useAppSelector((state) => state.orders.orderList);

  const handleChangeSelectionRow = (
    selectedRowKeys: React.Key[],
    selectedRows: IOrders[]
  ) => {
    dispatch(handleChangeSelectionOrder(selectedRows));
  };

  return (
    <Table
      columns={columns}
      dataSource={orderList}
      bordered
      rowSelection={{
        type: 'radio',
        defaultSelectedRowKeys: ['1'],
        onChange: handleChangeSelectionRow,
      }}
      pagination={false}
    />
  );
};
