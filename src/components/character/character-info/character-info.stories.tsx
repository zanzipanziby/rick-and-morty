import type {Meta, StoryObj} from '@storybook/react';
import {CharacterInfo} from "./character-info";


const meta = {
    title: 'Components/Info',
    component: CharacterInfo,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CharacterInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "123",
        status: "Alive",
        species: "Human"
    },
};

