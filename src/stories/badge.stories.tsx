import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "Components/ui/badge",
  component: Badge,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      description: "Badge variants",
      options: ["success", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
    className: "",
  },
};

export const Warining: Story = {
  args: {
    variant: "warning",
    children: "Warning",
    className: "",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
    className: "",
  },
};
