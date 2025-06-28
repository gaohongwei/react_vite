const ListColumns = [
  {
    title: "ServiceType",
    dataIndex: "serviceType",
    width: "20%",
    initialValue: "sell",
    valueType: "select",
    request: async () => [
      {
        label: "Sell",
        value: "sell",
      },
      {
        label: "Buy",
        value: "buy",
      },
    ],
  },
  {
    title: "Area",
    dataIndex: "area",
    width: "20%",
    initialValue: "bio",
    valueType: "select",
    request: async () => [
      {
        label: "bio",
        value: "bio",
      },
      {
        label: "it",
        value: "it",
      },
    ],
  },
  {
    title: "AubArea",
    dataIndex: "subArea",
    width: "20%",
  },

  {
    title: "Desc",
    dataIndex: "desc",
  },
  {
    title: "User",
    dataIndex: "user",
  },

  {
    title: "status",
    dataIndex: "status",
  },
];

export { ListColumns };
