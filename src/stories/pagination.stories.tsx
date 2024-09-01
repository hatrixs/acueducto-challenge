import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNav,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/ui/pagination",
  component: Pagination,
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

export const PaginationWrapper: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    initialPage: 1,
    totalPages: 20,
    visiblePages: 5,
    onPageChange: action("Page change to"),
  },
};

export const PaginationModular: Story = {
  render: () => (
    <PaginationNav>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="" onClick={() => {}} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" onClick={() => {}} isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" onClick={() => {}}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" onClick={() => {}}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" onClick={() => {}}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="" onClick={() => {}}>
            20
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="" onClick={() => {}} />
        </PaginationItem>
      </PaginationContent>
    </PaginationNav>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates the modular approach to pagination. Unlike the PaginationWrapper component, which provides a complete solution, this modular version offers individual UI components. This allows developers to implement their own custom logic and have more control over the pagination structure and behavior.",
      },
    },
  },
};
