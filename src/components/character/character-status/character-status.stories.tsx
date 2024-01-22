import type { Meta, StoryObj } from '@storybook/react';
import {CharacterStatus} from "./character-status";

const meta = {
    title: 'Components/Status',
    component: CharacterStatus,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CharacterStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        status: "Alive",
        species: "Human"
    },
};

