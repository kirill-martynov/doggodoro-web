export async function requestNotification() {
  try {
    const permission = Notification.permission;

    const hasPermission = permission === "granted";

    if (!hasPermission) {
      await Notification.requestPermission();
    }

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

type TShowNotification = {
  title: string;
  body: string;
  icon?: string;
}

export function showNotification({ title, body, icon }: TShowNotification) {
  new Notification(title, { body, icon });
}
