import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

const meta: Meta<typeof Checkbox> = {
  title: "Components/ui/Dropdown",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "250px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const Default: Story = {
  render: () => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary">Dropdown menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-3">
          <div className="flex flex-col gap-2">
            {days.map((day) => (
              <div className="flex items-center space-x-2" key={day}>
                <Checkbox id={day} className="bg-neutral-carbon" />
                <label
                  htmlFor={day}
                  className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {day}
                </label>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
