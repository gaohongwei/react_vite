function fStatus() {
  return {
    close: { text: "已定", status: "Error" },
    open: { text: "待定", status: "Success" },
    unknown: { text: "未知", status: "Error" },
  };
}

function fServiceType() {
  return {
    close: { text: "供", status: "Error" },
    running: { text: "需", status: "Success" },
    online: { text: "其他", status: "Processing" },
  };
}

function fArea() {
  return {
    bio: { text: "生物医药" },
    ai: { text: "人工智能" },
    big_data: { text: "数据分析" },
    sw: { text: "软件" },
  };
}

function fSubArea() {
  return {
    bio: { text: "生物" },
    it: { text: "IT" },
    sw: { text: "软件" },
  };
}
function fCreator() {
  const creators = {
    付小小: { text: "付小小" },
    曲丽丽: { text: "曲丽丽" },
    林东东: { text: "林东东" },
    陈帅帅: { text: "陈帅帅" },
    兼某某: { text: "兼某某" },
  };
  return creators;
}
function fRandomData(fCall) {
  const data = fCall();
  let keys;
  if (Array.isArray(data)) {
    keys = data;
  } else {
    keys = Object.keys(data);
  }
  const len = keys.length;
  const key = keys[Math.floor(Math.random() * 100) % len];
  return key;
}
function fFakeData() {
  const tableListDataSource = [];
  for (let i = 0; i < 50; i += 1) {
    tableListDataSource.push({
      key: i,
      desc: `描述需求，需求描述，需求描述${i}`,
      serviceType: fRandomData(fServiceType),
      area: fRandomData(fArea),
      subArea: fRandomData(fSubArea),
      contact: fRandomData(fCreator),
      creator: "群主",
      status: fRandomData(fStatus),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
    });
  }
  return tableListDataSource;
}

export { fStatus, fServiceType, fArea, fSubArea, fFakeData, fCreator };
