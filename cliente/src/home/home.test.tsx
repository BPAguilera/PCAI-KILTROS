import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Home from './home';

describe('home', () => {
    it('should render Bienvenido on startup', () => {
        render(<Home />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
});