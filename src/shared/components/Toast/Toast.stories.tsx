import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    message: "Toast message",
  },
};
