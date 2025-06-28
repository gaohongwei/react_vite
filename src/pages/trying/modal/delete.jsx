import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function showConfirm() {
  Modal.confirm({
    title: "Do you Want to delete these items?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

function showPromiseConfirm() {
  Modal.confirm({
    title: "Do you want to delete these items?",
    icon: <ExclamationCircleOutlined />,
    content: "When clicked the OK button, this dialog will be closed after 1 second",
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
}

const apiCall = () => {
  console.log("Called Delete API");
};
const showDeleteConfirm = (apiCall) => () => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk: apiCall,
    onCancel() {
      console.log("Cancel");
    },
  });
};

function showPropsConfirm() {
  Modal.confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: true,
    },
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

const DeleteView = () => {
  return (
    <Space>
      <Button onClick={showConfirm}>Modal.Confirm</Button>
      <Button onClick={showPromiseConfirm}>With promise</Button>
      <Button danger onClick={showDeleteConfirm(apiCall)} type="primary">
        Delete
      </Button>
      <Button onClick={showPropsConfirm} type="dashed">
        With extra props
      </Button>
    </Space>
  );
};

export default DeleteView;
