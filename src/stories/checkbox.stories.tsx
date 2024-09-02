import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/ui/Checkbox",
  component: Checkbox,
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
  render: () => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    );
  },
};
