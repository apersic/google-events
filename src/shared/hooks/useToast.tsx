import { useRef } from "react";
import { createRoot } from "react-dom/client";
import Toast from "../components/Toast/Toast";

type ShowProps = {
  message: string;
  wait: number;
};

export interface ToastHookProps {
  show: ({ message, wait }: ShowProps) => void;
}

const container = document.getElementById("toast");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

export default function useToast(props?: ToastHookProps) {
  const show = ({ message, wait }: ShowProps) => {
    root.render(<Toast {...props} message={message} />);

    (async () => {
      await unMountToast(wait);
    })();
  };

  async function unMountToast(wait?: number | null) {
    await new Promise(() =>
      setTimeout(() => {
        root.render(<></>);
      }, wait || 0)
    );
  }

  const memoShow = useRef(show);

  return {
    show: memoShow.current,
  };
}

export async function showToast(message: string, wait?: number | null) {
  root.render(<Toast message={message} />);

  await new Promise(() =>
    setTimeout(() => {
      root.render(<></>);
    }, wait || 3000)
  );
}
