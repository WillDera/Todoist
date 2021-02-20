import React from "react";
import { Sidebar } from './Siderbar';
import { Tasks } from '../Tasks';

export const Content = () => (
    <section>
        <Sidebar />
        <Tasks />
    </section>
)