import { notification } from "antd";

notification.config({
  placement: "bottomRight",
  bottom: 50,
  duration: 3
});

export default function openNotificationWithIcon(
  type,
  { message, description }
) {
  notification[type]({
    message,
    description
  });
}
