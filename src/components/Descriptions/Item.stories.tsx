import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalDescriptionsItem from './Item';

export default {
  title: 'Descriptions/Item',
  args: {
    title: 'title',
    children: 'children',
  },
  component: InternalDescriptionsItem,
} as ComponentMeta<typeof InternalDescriptionsItem>;

export const DescriptionsItem: ComponentStory<
  typeof InternalDescriptionsItem
> = (args) => <InternalDescriptionsItem {...args} />;
