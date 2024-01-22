import type {Meta, StoryObj} from '@storybook/react';

import {CharacterImage} from "./character-image";

const meta = {
    title: 'Components/Image',
    component: CharacterImage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CharacterImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
};

