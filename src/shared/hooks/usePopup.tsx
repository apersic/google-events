import { ReactElement, useRef } from "react";
import { Popup } from "../components/Popup/Popup";
import { createRoot } from "react-dom/client";

type ShowProps = {
  content: ReactElement;
};

export interface PopupHookProps {
  show: ({ content }: ShowProps) => void;
}

const container = document.getElementById("popup");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

export default function usePopup(props?: PopupHookProps) {
  const show = ({ content }: ShowProps) => {
    root.render(<Popup {...props} onClose={() => unMountPopup()} content={content} />);
  };

  function unMountPopup() {
    root.render(<></>);
  }

  const memoShow = useRef(show);
  const memoUnMount = useRef(unMountPopup);

  return {
    show: memoShow.current,
    unMountPopup: memoUnMount.current,
  };
}
