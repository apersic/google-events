import type { Meta, StoryObj } from "@storybook/react";
import { DeletePopup } from "./DeletePopup";

const meta: Meta<typeof DeletePopup> = {
  title: "Components/DeletePopup",
  component: DeletePopup,
};

export default meta;
type Story = StoryObj<typeof DeletePopup>;

export const Primary: Story = {
  args: {
    title: "Delete popup",
  },
};
