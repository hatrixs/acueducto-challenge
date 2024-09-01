import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Input> = {
  title: "Components/ui/input",
  component: Input,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder text",
    disabled: false,
  },
  render: (args) => (
    <Input
      {...args}
      onChange={(e) => {
        action("event")(e);
      }}
    />
  ),
};

export const WithLabel: Story = {
  args: {
    placeholder: "Placeholder text",
    disabled: false,
    label: "Label",
  },
  render: (args) => (
    <Input
      {...args}
      onChange={(e) => {
        action("event")(e);
      }}
    />
  ),
};
